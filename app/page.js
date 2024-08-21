"use client";
import { Box } from "@mui/material";
import Appbar from "./components/Appbar";
import Department from "./components/Department";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Professors from "./components/Professors";

export default function Home() {
  return (
    <Box>
      <Appbar />
      <Hero />
      <Department />
      <Professors />
      <Footer />
    </Box>
  );
}
