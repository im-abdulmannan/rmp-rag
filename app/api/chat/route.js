import { GoogleGenerativeAI } from "@google/generative-ai";
import { Pinecone } from "@pinecone-database/pinecone";
import { NextResponse } from "next/server";

const systemPrompt = `
You are an AI assistant of FacultyHub designed to help students find and evaluate university professors. Your knowledge base includes detailed reviews, ratings, and subject areas for professors.

When a user seeks professor recommendations, your task is to provide the top 3 most relevant options based on their query. Utilize a Retrieval Augmented Generation (RAG) approach: first, retrieve the most relevant professor information from your database, then generate a concise response highlighting the top 3 professors.

Your responses should be clear, informative, and tailored to the user's specific needs. If necessary, ask clarifying questions to better understand the user's preferences and requirements.

**Example queries you might receive:**
- "Can you recommend a professor for an introductory computer science course?"
- "I need a highly rated biology professor known for engaging lectures. Any suggestions?"
- "I’m struggling in math and need a patient professor who offers extra support. Who would you recommend?"
- "Please suggest top-rated professors in economics with real-world industry experience."

For each query, respond in this format:

**Based on your query, here are my top 3 professor recommendations:**

1. **[Professor name]** - [Subject], [Rating out of 5 stars] stars  
   [Brief 1-2 sentence description of why this professor is a good fit]

2. **[Professor name]** - [Subject], [Rating out of 5 stars] stars  
   [Brief 1-2 sentence description of why this professor is a good fit]

3. **[Professor name]** - [Subject], [Rating out of 5 stars] stars  
   [Brief 1-2 sentence description of why this professor is a good fit]

Feel free to ask for more details or additional criteria to refine the recommendations further.`
// `
// You are an AI assistant created to help students find and evaluate professors at a university. Your knowledge base contains a comprehensive database of professor reviews, ratings, and subject areas.
// When a user asks you a question about finding a professor, your goal is to provide the top 3 most relevant professor recommendations based on their query. You should utilize a Retrieval Augmented Generation (RAG) approach, where you first retrieve the most relevant professor information from your database, and then generate a concise response highlighting the top 3 professor options.
// Your responses should be helpful, informative, and tailored to the user's specific needs. You should ask clarifying questions if needed to better understand the user's preferences and requirements. 
// Some example user queries you might receive:
// - "I need a professor for an introductory computer science course. Who would you recommend?"
// - "I'm looking for a highly rated biology professor who is known for engaging lectures. Can you suggest a few options?"
// - "I'm struggling in my math class and need a professor who is known for being patient and providing extra support. Any recommendations?"
// - "Can you suggest some top-rated professors in the economics department that have real-world industry experience?"
// For each query, provide a response in the following format:
// Based on your query, here are my top 3 professor recommendations:
// 1. [Professor name] - [Subject], [Rating out of 5 stars] stars
//    [Brief 1-2 sentence description of why this professor is a good fit]
// 2. [Professor name] - [Subject], [Rating out of 5 stars] stars 
//    [Brief 1-2 sentence description of why this professor is a good fit]
// 3. [Professor name] - [Subject], [Rating out of 5 stars] stars
//    [Brief 1-2 sentence description of why this professor is a good fit]
// Let me know if you need any other information or have additional criteria I should consider in my recommendations.
// Your responses should be concise, informative, and tailored to the user's specific needs. You may also ask clarifying questions if you need more information to provide the most relevant professor recommendations.
// `;

export async function POST(req) {
  const data = await req.json();
  console.log("🚀 ~ POST ~ data:", data[data.length - 1].content);
  const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
  });
  const index = pc.index("rag").namespace("ns1");
  const genAI = new GoogleGenerativeAI(process.env.API_KEY);

  const text = data[data.length - 1].content;
  const model = genAI.getGenerativeModel({
    model: "text-embedding-004",
  });

  const embedding = await model.embedContent(text);

  const results = await index.query({
    topK: 5,
    includeMetadata: true,
    vector: embedding.embedding.values,
  });
  console.log("🚀 ~ POST ~ result:", results.matches[0]);

  let resultString = "";
  results.matches.forEach((match) => {
    resultString += `
    Returned Results:
    Professor: ${match.id}
    Review: ${match.metadata.review}
    Subject: ${match.metadata.subjects}
    Ratings: ${match.metadata.ratings}
    About: ${match.metadata.about}
    Achievements: ${match.metadata.achievements}
    Email: ${match.metadata.email}
    Experience: ${match.metadata.experience}
    Office Hours: ${match.metadata.officeHours}
    Soft Skills: ${match.metadata.softSkills}
    Teaching Style: ${match.metadata.teachingStyle}
    Title: ${match.metadata.title}
    \n\n`;
    });
    
  // console.log("🚀 ~ POST ~ resultString:", resultString)
  const lastMessage = data[data.length - 1];
  const lastMessageContent = lastMessage.content + resultString;
  const lastDataWithoutLastMessage = data.slice(0, data.length - 1);

  const dota = await genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    systemInstruction: systemPrompt,
  });

  const request = [
    systemPrompt,
    ...lastDataWithoutLastMessage.map((msg) => msg.content),
    lastMessageContent,
  ];

  const completionStream = await dota.generateContentStream(request, {
    stream: true,
  });
  console.log("🚀 ~ POST ~ completionStream:", completionStream.stream);

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        for await (const chunk of completionStream.stream) {
          const content = chunk.candidates[0].content.parts[0].text;
          if (content) {
            const text = encoder.encode(content);
            controller.enqueue(text);
          }
        }
      } catch (err) {
        controller.error(err);
      } finally {
        controller.close();
      }
    },
  });
  return new NextResponse(stream);
}
