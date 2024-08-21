"use client"
import Appbar from "@/app/components/Appbar";
import Footer from "@/app/components/Footer";
import { SignIn } from "@clerk/nextjs";
import { Box } from "@mui/material";

export default function SignInPage() {
  return (
    <Box>
      <Appbar />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        my={4}
      >
        <Box sx={{ width: "100%", maxWidth: "400px" }}>
          <SignIn />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}