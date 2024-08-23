"use client";

import { Box, Container, Typography } from "@mui/material";
import theme from "../theme";

const Hero = () => {
  return (
    <Box
      height={"100vh"}
      sx={{
        background: `linear-gradient(45deg, ${theme.palette.emerald[800]} 30%, ${theme.palette.emerald[600]} 90%)`,
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h1" fontWeight={700}>
          Learn and grow together
        </Typography>
        <Typography variant="h3" color={theme.palette.emerald[200]}>
          A place where creativity meets passion
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
