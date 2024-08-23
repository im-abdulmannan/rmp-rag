"use client";

import { professors } from "@/data";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import theme from "../theme";

const Page = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOpenDialog = (professor) => {
    setSelectedProfessor(professor);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProfessor(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({
      ...contactDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Details Submitted: ", contactDetails);
  };

  return (
    <Box>
      <Appbar />
      <Box
        height={"40vh"}
        sx={{
          background: "linear-gradient(45deg, #10b981 30%, #059669 90%)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            Do not let your <br /> <b style={{ color: "#022c22" }}>Vision</b>{" "}
            Down
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ my: 5 }}>
        <Typography
          variant="h3"
          align={"center"}
          gutterBottom
          marginY={"4rem"}
          fontWeight={600}
        >
          Our Expert Professors
        </Typography>
        <Grid container spacing={3}>
          {professors.map((professor, index) => (
            <Grid item xs={12} sm={12} md={6} key={index} display={"flex"}>
              <Card
                sx={{
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: 4,
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.2)",
                    transform: "scale(1.02)",
                  },
                }}
                onClick={() => handleOpenDialog(professor)}
              >
                <CardContent>
                  <Box display="flex" mb={3} gap={2}>
                    <Avatar
                      sx={{
                        width: 90,
                        height: 90,
                        backgroundColor: "#10b981",
                        color: "#fff",
                      }}
                      src={professor.image}
                      alt={professor.name}
                    >
                      {professor.name}
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: "#064e3b" }}
                      >
                        {professor.professor}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#059669", marginBottom: 1 }}
                      >
                        {professor.email}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                          marginTop: 1,
                        }}
                      >
                        {professor.subjects.map((subject, idx) => (
                          <Chip
                            key={idx}
                            label={subject}
                            size="small"
                            sx={{
                              color: `${theme.palette.emerald[600]}`,
                              backgroundColor: `${theme.palette.emerald[100]}`,
                              fontSize: "10px",
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="p">{professor.review}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
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
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          sx={{
            fontWeight: 600,
            backgroundColor: "#10b981",
            color: "#fff",
            textAlign: "center",
            position: "relative",
            padding: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#fff" }}>
              {selectedProfessor?.professor}
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ padding: 3 }}>
          <Container maxWidth="md">
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#064e3b" }}
              >
                Bio
              </Typography>
              <Typography sx={{ color: "#064e3b" }}>
                {selectedProfessor?.about}
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#064e3b" }}
              >
                Subjects
              </Typography>
              <ul style={{ paddingLeft: "2rem" }}>
                {selectedProfessor?.subjects.map((subject, idx) => (
                  <li key={idx}>
                    <Typography sx={{ color: "#064e3b" }}>{subject}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#064e3b" }}
              >
                Office Hours
              </Typography>
              <Typography sx={{ color: "#064e3b" }}>
                {selectedProfessor?.officeHours}
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#064e3b" }}
              >
                Achievements
              </Typography>
              <ul style={{ paddingLeft: "2rem" }}>
                {selectedProfessor?.achievements.map((achievement, idx) => (
                  <li key={idx}>
                    <Typography sx={{ color: "#064e3b" }}>
                      {achievement}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#064e3b" }}
              >
                Experience
              </Typography>
              <Typography sx={{ color: "#064e3b" }}>
                {selectedProfessor?.experience} years
              </Typography>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
      <Footer />
    </Box>
  );
};

export default Page;
