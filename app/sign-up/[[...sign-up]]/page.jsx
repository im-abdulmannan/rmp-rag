"use client";
import Appbar from "@/app/components/Appbar";
import Footer from "@/app/components/Footer";
import { SignUp } from "@clerk/nextjs";
import { Box } from "@mui/material";

export default function SignUpPage() {
  return (
    <Box>
      <Appbar></Appbar>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        my={4}
      >
        <Box sx={{ width: "100%", maxWidth: "400px" }}>
          <SignUp />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
