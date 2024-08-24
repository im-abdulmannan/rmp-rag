"use client";

import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";

const Page = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({
      ...contactDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box>
      <Appbar />
      <Container maxWidth="lg" sx={{ my: 5 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: "#064e3b",
            mb: 3,
            textAlign: "center",
          }}
        >
          Contact Us
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            backgroundColor: "#ecfdf5",
            padding: 4,
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            value={contactDetails.name}
            onChange={handleChange}
            required
            sx={{
              backgroundColor: "#ffffff",
              "& .MuiInputLabel-root": {
                color: "#059669",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#059669",
                },
                "&:hover fieldset": {
                  borderColor: "#059669",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#059669",
                },
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Your Name"
          />
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            type="email"
            value={contactDetails.email}
            onChange={handleChange}
            required
            sx={{
              backgroundColor: "#ffffff",
              "& .MuiInputLabel-root": {
                color: "#059669",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#059669",
                },
                "&:hover fieldset": {
                  borderColor: "#059669",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#059669",
                },
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Your Email"
          />
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            value={contactDetails.message}
            onChange={handleChange}
            required
            sx={{
              backgroundColor: "#ffffff",
              "& .MuiInputLabel-root": {
                color: "#059669",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#059669",
                },
                "&:hover fieldset": {
                  borderColor: "#059669",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#059669",
                },
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Your Message"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#10b981",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#059669",
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
      <br />
      <br />
      <Footer />
    </Box>
  );
};

export default Page;
