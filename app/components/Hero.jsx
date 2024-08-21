"use client";

import { Box, Container, Typography } from "@mui/material";
import theme from "../theme";

const Hero = () => {
  return (
    <Box
      height={"90vh"}
      sx={{
        background: "linear-gradient(45deg, #3f51b52e 30%, #7b1fa27c 90%)",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h1" fontWeight={700}>
            Learn and grow together
        </Typography>
        <Typography variant="h3" color={theme.palette.snuff[700]}>
          A place where creativity meets passion
        </Typography>
      </Container>
    </Box>
  );
};

export default Hero;
