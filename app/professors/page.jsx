"use client";

import { professors } from "@/data";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography
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
  console.log(selectedProfessor);

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
  };

  return (
    <Box>
      <Appbar />
      <Box
        height={"50vh"}
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
            <Typography variant="p" sx={{ color: theme => theme.palette.emerald[200], fontSize: "10px" }}>
              {selectedProfessor?.email}
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Container sx={{my: 4}}>
            <Grid container rowSpacing={4}>
              <Grid item md={6} sm={12}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#064e3b" }}
                >
                  Subjects
                </Typography>
                <ul style={{ paddingLeft: "2rem" }}>
                  {selectedProfessor?.subjects.map((subject, idx) => (
                    <li key={idx}>
                      <Typography sx={{ color: "#064e3b" }}>
                        {subject}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Grid>
              <Grid item md={6} sm={12}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#064e3b" }}
                >
                  Soft Skills
                </Typography>
                <ul style={{ paddingLeft: "2rem" }}>
                  {selectedProfessor?.softSkills.map((skill, idx) => (
                    <li key={idx}>
                      <Typography sx={{ color: "#064e3b" }}>{skill}</Typography>
                    </li>
                  ))}
                </ul>
              </Grid>
              <Grid item md={6} sm={12}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#064e3b" }}
                >
                  Title
                </Typography>
                <Typography sx={{ color: "#064e3b" }}>
                  {selectedProfessor?.title}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#064e3b" }}
                >
                  Experience
                </Typography>
                <Typography sx={{ color: "#064e3b" }}>
                  {selectedProfessor?.experience} years
                </Typography>
              </Grid>
              <Grid item md={6} sm={12}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#064e3b" }}
                >
                  Teaching Style
                </Typography>
                <Typography sx={{ color: "#064e3b" }}>
                  {selectedProfessor?.teachingStyle}
                </Typography>
              </Grid>
              <Grid item md={12} sm={12}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#064e3b" }}
                >
                  About
                </Typography>
                <Typography sx={{ color: "#064e3b" }}>
                  {selectedProfessor?.about}
                </Typography>
              </Grid>
              <Grid item md={6} sm={12}>
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
              </Grid>
              <Grid item md={6} sm={12}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: "#064e3b" }}
                >
                  Office Hours
                </Typography>
                <Typography sx={{ color: "#064e3b" }}>
                  {selectedProfessor?.officeHours}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </DialogContent>
      </Dialog>
      <Footer />
    </Box>
  );
};

export default Page;
