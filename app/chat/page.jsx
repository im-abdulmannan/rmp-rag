"use client";

import { useUser } from "@clerk/nextjs";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Chat from "../components/Chat";
import Loader from "../components/Loader";
import SidebarComponent from "../components/Sidebar";

export default function Page() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hi! I'm the Rate My Professor support assistant. How can I help you today?`,
    },
  ]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isLoaded) {
      if (!user) {
        router.push("/sign-in");
      }
    }
  }, [isLoaded, router, user]);

  const sendMessage = async () => {
    setMessage("");
    setMessages((messages) => [
      ...messages,
      { role: "user", content: message },
      { role: "assistant", content: "" },
    ]);

    const response = fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([...messages, { role: "user", content: message }]),
    }).then(async (res) => {
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let result = "";

      return reader.read().then(function processText({ done, value }) {
        if (done) {
          return result;
        }
        const text = decoder.decode(value || new Uint8Array(), {
          stream: true,
        });
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1];
          let otherMessages = messages.slice(0, messages.length - 1);
          return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text },
          ];
        });
        return reader.read().then(processText);
      });
    });
  };

  return (
    <Box>
      {!isLoaded || !isSignedIn || !user ? (
        <Loader />
      ) : (
        <Box display="flex" flexDirection="row" height={"100vh"}>
          {/* {!isTabOrMobile && <SidebarComponent />} */}
          <SidebarComponent user={user} />
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Appbar />
            <Chat />
          </Box>
        </Box>
      )}
    </Box>
  );
}
