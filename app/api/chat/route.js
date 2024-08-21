import { GoogleGenerativeAI } from "@google/generative-ai";
import { Pinecone } from "@pinecone-database/pinecone";
import { NextResponse } from "next/server";

const systemPrompt = `
You are an AI assistant created to help students find and evaluate professors at a university. Your knowledge base contains a comprehensive database of professor reviews, ratings, and subject areas.
When a user asks you a question about finding a professor, your goal is to provide the top 3 most relevant professor recommendations based on their query. You should utilize a Retrieval Augmented Generation (RAG) approach, where you first retrieve the most relevant professor information from your database, and then generate a concise response highlighting the top 3 professor options.
Your responses should be helpful, informative, and tailored to the user's specific needs. You should ask clarifying questions if needed to better understand the user's preferences and requirements. 
Some example user queries you might receive:
- "I need a professor for an introductory computer science course. Who would you recommend?"
- "I'm looking for a highly rated biology professor who is known for engaging lectures. Can you suggest a few options?"
- "I'm struggling in my math class and need a professor who is known for being patient and providing extra support. Any recommendations?"
- "Can you suggest some top-rated professors in the economics department that have real-world industry experience?"
For each query, provide a response in the following format:
Based on your query, here are my top 3 professor recommendations:
1. [Professor name] - [Subject], [Rating out of 5 stars] stars
   [Brief 1-2 sentence description of why this professor is a good fit]
2. [Professor name] - [Subject], [Rating out of 5 stars] stars 
   [Brief 1-2 sentence description of why this professor is a good fit]
3. [Professor name] - [Subject], [Rating out of 5 stars] stars
   [Brief 1-2 sentence description of why this professor is a good fit]
Let me know if you need any other information or have additional criteria I should consider in my recommendations.
Your responses should be concise, informative, and tailored to the user's specific needs. You may also ask clarifying questions if you need more information to provide the most relevant professor recommendations.
`;

// export async function POST(req) {
//   const data = req.json();
//   const pc = new Pinecone({
//     apiKey: process.env.PINECONE_API_KEY,
//   });
//   const index = pc.index('rag').namespace('ns1');
//   const genAI = new GoogleGenerativeAI(process.env.API_KEY);

//   const text = data[data.length - 1].content;
//   const response = await genai.embed_content({
//     model: "models/text-embedding-004",
//     content: text,
//     output_dimensionality: 768,  // Adjust if needed
//   });

//   // Extract the embedding from the response
//   const embedding = response.embedding;

//   // Query the index using the generated embedding
//   const results = await index.query({
//     topK: 5,
//     includeMetadata: true,
//     vector: embedding,
//   });

// //   const text = data[data.length - 1].content;
// //   const embedding = await openAI.embedding.create({
// //     model: "models/text-embedding-004",
// //     input: text,
// //     encodingFormat: "float",
// //   })

// //   const results = await index.query({
// //     topK: 5,
// //     includeMetadata: true,
// //     vector: embedding.data[0].embedding,
// //   })

//   let resultString = ''
// results.matches.forEach((match) => {
//   resultString += `
//   Returned Results:
//   Professor: ${match.id}
//   Review: ${match.metadata.stars}
//   Subject: ${match.metadata.subject}
//   Stars: ${match.metadata.stars}
//   \n\n`
// })

// const lastMessage = data[data.length - 1]
// const lastMessageContent = lastMessage.content + resultString
// const lastDataWithoutLastMessage = data.slice(0, data.length - 1)

// const completion = await genAI
//   .getGenerativeModel({
//     model: "gemini-1.5-pro",  // Replace with the appropriate model if needed
//     systemInstruction: systemPrompt,  // Corresponds to `systemPrompt`
//   })
//   .generateContent({
//     prompt: [
//       ...lastDataWithoutLastMessage,
//       { role: 'user', content: lastMessageContent }
//     ],
//     stream: true,  // Maintain the streaming capability
//   });

// // const completion = await genAI
// // .getGenerativeModel({
// //   model: "gemini-1.5-pro",
// //   systemInstruction: supportPrompt,
// // })
// // .generateContent(prompt);

// // const completion = await openai.chat.completions.create({
// //     messages: [
// //       {role: 'system', content: systemPrompt},
// //       ...lastDataWithoutLastMessage,
// //       {role: 'user', content: lastMessageContent},
// //     ],
// //     model: 'gpt-3.5-turbo',
// //     stream: true,
// //   })

//   const stream = new ReadableStream({
//     async start(controller) {
//       const encoder = new TextEncoder()
//       try {
//         for await (const chunk of completion) {
//           const content = chunk.choices[0]?.delta?.content
//           if (content) {
//             const text = encoder.encode(content)
//             controller.enqueue(text)
//           }
//         }
//       } catch (err) {
//         controller.error(err)
//       } finally {
//         controller.close()
//       }
//     },
//   })
//   return new NextResponse(stream)
// }

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
  console.log("🚀 ~ POST ~ result:", results);

  let resultString = "";
  results.matches.forEach((match) => {
    resultString += `
  Returned Results:
  Professor: ${match.id}
  Review: ${match.metadata.stars}
  Subject: ${match.metadata.subject}
  Stars: ${match.metadata.stars}
  \n\n`;
  });

  const lastMessage = data[data.length - 1];
  const lastMessageContent = lastMessage.content + resultString;
  const lastDataWithoutLastMessage = data.slice(0, data.length - 1);

  // const completion = await genAI
  //   .getGenerativeModel({
  //     model: "gemini-1.5-pro",
  //     systemInstruction: supportPrompt,
  //   })
  //   .generateContent({
  //     [...lastDataWithoutLastMessage,]
  //   });

  const dota = await genAI.getGenerativeModel({
    model: "gemini-1.5-pro",  // Ensure this is the correct model name
    systemInstruction: systemPrompt,  // System instruction or context
  });
  
  // Prepare the input prompt as a simple string or array of strings, not as an object with `role` and `content`
  const request = [
    systemPrompt,
    ...lastDataWithoutLastMessage.map(msg => msg.content), // Extract content as plain text
    lastMessageContent
  ];
  
  // Generate content with streaming enabled
  const completionStream = await dota.generateContentStream(request, {
    stream: true,  // Enable streaming
  });
  console.log("🚀 ~ POST ~ completionStream:", completionStream.stream)

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder()
      try {
        for await (const chunk of completionStream.stream) {
          const content = chunk.candidates[0].content.parts[0].text;
          if(content) {
            const text = encoder.encode(content)
            controller.enqueue(text);
          }
        }
        
        // Optionally, handle the final aggregated response
        // const finalResponse = (await completionStream.response).candidates[0].content;
        // console.log("🚀 ~ POST ~ finalResponse:", finalResponse)
        // for await (const chunk of completion) {
        //   const content = chunk.choices[0]?.delta?.content
        //   if (content) {
        //     const text = encoder.encode(content)
        //     controller.enqueue(text)
        //   }
        // }
      } catch (err) {
        controller.error(err)
      } finally {
        controller.close()
      }
    },
  })
  return new NextResponse(stream)
}
