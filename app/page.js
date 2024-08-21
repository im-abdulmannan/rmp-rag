"use client";
import { Box } from "@mui/material";
import AppBar from "./components/AppBar";
import Department from "./components/Department";
import Professors from "./components/Professors";

export default function Home() {
  return (
    <Box>
      <AppBar />
      <Department />
      <Professors />
    </Box>
  );
}
