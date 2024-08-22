"use client";

import { useUser } from "@clerk/nextjs";
import { Box, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Appbar from "../components/Appbar";
import Chat from "../components/Chat";
import Loader from "../components/Loader";
import SidebarComponent from "../components/Sidebar";

export default function Page() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  const isTabOrMobile = useMediaQuery("(max-width: 900px)");

  useEffect(() => {
    if (isLoaded) {
      if (!user) {
        router.push("/sign-in");
      }
    }
  }, [isLoaded, router, user]);

  return (
    <Box>
      {!isLoaded || !isSignedIn || !user ? (
        <Loader />
      ) : (
        <Box display="flex" flexDirection="row" height={"100vh"}>
          {!isTabOrMobile && <SidebarComponent user={user} />}
          <Box
            sx={{
              width: "100%",
            }}
          >
            <Appbar />
            <Chat user={user} />
          </Box>
        </Box>
      )}
    </Box>
  );
}
