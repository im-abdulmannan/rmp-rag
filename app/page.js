'use client'

import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hi! I'm the Rate My Professor support assistant. How can I help you today?`,
    },
  ]);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages((prev) => [...prev, { role: "user", content: message }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let result = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        result += decoder.decode(value, { stream: true });
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: result,
          },
        ]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      console.log("Hurrayyy!")
    }
  };


  // const sendMessage = async () => {
  //   setMessage("");
  //   setMessages((messages) => [
  //     ...messages,
  //     { role: "user", content: message },
  //     { role: "assistant", content: "" },
  //   ]);

  //   const response = fetch("/api/chat", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify([...messages, { role: "user", content: message }]),
  //   }).then(async (res) => {
  //     const reader = res.body.getReader();
  //     const decoder = new TextDecoder();
  //     let result = "";

  //     return reader.read().then(function processText({ done, value }) {
  //       if (done) {
  //         return result;
  //       }
  //       const text = decoder.decode(value || new Uint8Array(), {
  //         stream: true,
  //       });
  //       setMessages((messages) => {
  //         let lastMessage = messages[messages.length - 1];
  //         let otherMessages = messages.slice(0, messages.length - 1);
  //         return [
  //           ...otherMessages,
  //           { ...lastMessage, content: lastMessage.content + text },
  //         ];
  //       });
  //       return reader.read().then(processText);
  //     });
  //   });
  // };
  return (
    <div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Send</button>
      {JSON.stringify(messages)}
    </div>
  );
}
