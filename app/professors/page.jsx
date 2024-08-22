"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Appbar from "../components/Appbar";
import { useState } from "react";

const professors = [
  {
    name: "Dr. Alice Thompson",
    subjects: ["Algorithms", "Data Structures", "Machine Learning"],
    stars: 5,
    email: "alice.thompson@cs.edu.com",
    review:
      "Dr. Thompson's lectures are insightful and engaging. Her approach to complex topics makes them easier to grasp.",
    history:
      "Dr. Alice Thompson has been teaching at the university for over 8 years, specializing in algorithms and machine learning. She completed her PhD at MIT.",
    achievements: [
      "Published 10 research papers",
      "Awarded Best Professor in 2022",
    ],
    experience: 8,
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  },
  {
    name: "Prof. John Miller",
    subjects: ["Operating Systems", "Distributed Systems", "Networking"],
    stars: 4,
    email: "john.miller@cs.edu.com",
    review:
      "Prof. Miller's classes are challenging but rewarding. He has a deep knowledge of operating systems.",
    history:
      "Prof. John Miller has 7 years of teaching experience, focusing on operating systems and distributed systems. He received his MSc from Stanford.",
    achievements: [
      "Published 5 research papers",
      "Developed a popular open-source networking tool",
    ],
    experience: 7,
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  },
  {
    name: "Dr. Emma Davis",
    subjects: [
      "Artificial Intelligence",
      "Natural Language Processing",
      "Computer Vision",
    ],
    stars: 5,
    email: "emma.davis@cs.edu.com",
    review:
      "Dr. Davis is an expert in AI. Her passion for the subject is evident in her teaching.",
    history:
      "Dr. Emma Davis completed her PhD in AI at Berkeley and has been teaching at the university for 6 years.",
    achievements: [
      "Published 12 research papers",
      "Keynote speaker at multiple AI conferences",
    ],
    experience: 6,
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  },
  {
    name: "Prof. Michael Johnson",
    subjects: ["Software Engineering", "Agile Methodologies", "DevOps"],
    stars: 4,
    email: "michael.johnson@cs.edu.com",
    review:
      "Prof. Johnson brings real-world experience to his software engineering courses, making them highly practical.",
    history:
      "With 9 years of industry experience, Prof. Michael Johnson now teaches software engineering with a focus on Agile and DevOps.",
    achievements: [
      "Developed software for Fortune 500 companies",
      "Certified Scrum Master",
    ],
    experience: 9,
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  },
  {
    name: "Dr. Olivia Brown",
    subjects: ["Cybersecurity", "Cryptography", "Network Security"],
    stars: 5,
    email: "olivia.brown@cs.edu.com",
    review:
      "Dr. Brown's cybersecurity classes are comprehensive and up-to-date with the latest trends in the field.",
    history:
      "Dr. Olivia Brown has been a part of the university for 5 years, after earning her PhD in Cryptography from Harvard.",
    achievements: [
      "Published 8 research papers",
      "Developed a widely-used encryption algorithm",
    ],
    experience: 5,
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  },
  {
    name: "Prof. William Harris",
    subjects: ["Database Systems", "Data Warehousing", "Big Data"],
    stars: 4,
    email: "william.harris@cs.edu.com",
    review:
      "Prof. Harris is a database expert. His courses provide a solid foundation in data management.",
    history:
      "Prof. William Harris has 7 years of experience in both industry and academia, specializing in databases and big data.",
    achievements: [
      "Published 6 research papers",
      "Developed a high-performance database engine",
    ],
    experience: 7,
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  },
  {
    name: "Dr. Sophia Wilson",
    subjects: ["Computer Graphics", "Animation", "Game Development"],
    stars: 5,
    email: "sophia.wilson@cs.edu.com",
    review:
      "Dr. Wilson's passion for computer graphics is evident in her engaging and interactive classes.",
    history:
      "Dr. Sophia Wilson completed her PhD in Computer Graphics at Caltech and has been teaching at the university for 4 years.",
    achievements: [
      "Published 4 research papers",
      "Developed an award-winning animation software",
    ],
    experience: 4,
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  },
  {
    name: "Prof. James White",
    subjects: [
      "Human-Computer Interaction",
      "User Experience Design",
      "Web Development",
    ],
    stars: 4,
    email: "james.white@cs.edu.com",
    review:
      "Prof. White's courses in HCI and UX design are well-structured and highly informative.",
    history:
      "With 6 years of teaching experience, Prof. James White focuses on HCI and UX design. He holds a master's degree from Carnegie Mellon.",
    achievements: [
      "Published 5 research papers",
      "Designed a user-friendly web application used by millions",
    ],
    experience: 6,
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  },
  {
    name: "Dr. Charlotte Lee",
    subjects: ["Robotics", "Control Systems", "Autonomous Systems"],
    stars: 5,
    email: "charlotte.lee@cs.edu.com",
    review:
      "Dr. Lee's robotics classes are cutting-edge, offering hands-on experience with the latest technologies.",
    history:
      "Dr. Charlotte Lee has been teaching robotics and control systems for 5 years after completing her PhD at the University of Tokyo.",
    achievements: [
      "Published 7 research papers",
      "Developed an autonomous robot for disaster management",
    ],
    experience: 5,
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  },
  {
    name: "Prof. Henry Martinez",
    subjects: [
      "Parallel Computing",
      "High-Performance Computing",
      "Cloud Computing",
    ],
    stars: 4,
    email: "henry.martinez@cs.edu.com",
    review:
      "Prof. Martinez's courses in parallel and cloud computing are well-organized and insightful.",
    history:
      "Prof. Henry Martinez has 8 years of experience in high-performance computing, teaching at the university for the past 5 years.",
    achievements: [
      "Published 9 research papers",
      "Developed a high-performance computing framework",
    ],
    experience: 8,
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  },
  {
    name: "Dr. Emily Clark",
    subjects: [
      "Quantum Computing",
      "Computational Theory",
      "Advanced Algorithms",
    ],
    stars: 5,
    email: "emily.clark@cs.edu.com",
    review:
      "Dr. Clark's expertise in quantum computing is unparalleled, and her classes are both challenging and rewarding.",
    history:
      "Dr. Emily Clark has been teaching quantum computing and theoretical computer science for 6 years after completing her PhD at Oxford.",
    achievements: [
      "Published 11 research papers",
      "Developed a quantum algorithm used in industry",
    ],
    experience: 6,
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  },
  {
    name: "Prof. Daniel Evans",
    subjects: ["Software Testing", "Quality Assurance", "Software Metrics"],
    stars: 4,
    email: "daniel.evans@cs.edu.com",
    review:
      "Prof. Evans is a stickler for quality, and his courses in software testing are rigorous and thorough.",
    history:
      "With 7 years of experience in software testing and quality assurance, Prof. Daniel Evans has been a faculty member for 5 years.",
    achievements: [
      "Published 5 research papers",
      "Developed a widely-used software testing tool",
    ],
    experience: 7,
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  },
  {
    name: "Dr. Jessica Taylor",
    subjects: ["Data Mining", "Knowledge Discovery", "Machine Learning"],
    stars: 5,
    email: "jessica.taylor@cs.edu.com",
    review:
      "Dr. Taylor's courses in data mining are highly practical, with a focus on real-world applications.",
    history:
      "Dr. Jessica Taylor completed her PhD in Data Mining at Stanford and has been teaching for 4 years.",
    achievements: [
      "Published 6 research papers",
      "Developed a popular data mining toolkit",
    ],
    experience: 4,
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  },
  {
    name: "Prof. Benjamin King",
    subjects: [
      "Artificial Neural Networks",
      "Deep Learning",
      "Reinforcement Learning",
    ],
    stars: 4,
    email: "benjamin.king@cs.edu.com",
    review:
      "Prof. King's deep learning courses are cutting-edge, with a strong focus on recent advancements.",
    history:
      "Prof. Benjamin King has been teaching for 5 years, focusing on neural networks and deep learning.",
    achievements: ["Published 10 research papers"],
    experience: 5,
    image:
      "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
  },
];

const page = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState(null);

  const handleOpenDialog = (professor) => {
    setSelectedProfessor(professor);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProfessor(null);
  };

  return (
    <Box>
      <Appbar />
      <Box
        height={"40vh"}
        sx={{
          background: "linear-gradient(45deg, #3f51b52e 30%, #7b1fa27c 90%)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              color: "#ffffff",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            }}
          >
            Our Professors
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ my: 5 }}>
        <Grid container spacing={3} justifyContent="center">
          {professors.map((professor, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 3,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  borderRadius: 4,
                  backgroundColor: "#F3E5F5",
                  color: "#333",
                  minHeight: 320,
                  width: "100%",
                  maxWidth: 800,
                  margin: "auto",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.2)",
                    transform: "scale(1.02)",
                  },
                }}
                onClick={() => handleOpenDialog(professor)}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{ flex: "1 1 auto", mb: 2 }}
                >
                  <Avatar
                    sx={{
                      width: 90,
                      height: 90,
                      marginRight: 2,
                      backgroundColor: "#8E24AA",
                      fontSize: "2rem",
                      color: "#fff",
                      fontWeight: 500,
                    }}
                    src={professor.image}
                    alt={professor.name}
                  >
                    {professor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </Avatar>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: "#5E35B1" }}
                    >
                      {professor.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#7B1FA2", marginBottom: 1 }}
                    >
                      {professor.email}
                    </Typography>
                  </CardContent>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 0.5,
                    marginTop: 1,
                    overflow: "hidden",
                    flex: "1 1 auto",
                  }}
                >
                  {professor.subjects.map((subject, idx) => (
                    <Chip
                      key={idx}
                      label={subject}
                      sx={{
                        backgroundColor: "#7E57C2",
                        color: "#fff",
                        fontWeight: 500,
                        margin: "2px 0",
                      }}
                    />
                  ))}
                </Box>
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
            backgroundColor: "#8E24AA",
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
            {selectedProfessor?.image && (
              <Box
                component="img"
                src={selectedProfessor?.image}
                alt={selectedProfessor?.name}
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  mb: 2,
                }}
              />
            )}
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#fff" }}>
              {selectedProfessor?.name}
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent
          sx={{
            padding: 3,
            backgroundColor: "#F3E5F5",
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: "#5E35B1", mt: "2rem" }}
            >
              Subjects
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
                mt: 1,
              }}
            >
              {selectedProfessor?.subjects.map((subject, idx) => (
                <Chip
                  key={idx}
                  label={subject}
                  sx={{
                    backgroundColor: "#7E57C2",
                    color: "#fff",
                    fontWeight: 500,
                    margin: "2px 0",
                  }}
                />
              ))}
            </Box>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#5E35B1" }}>
              Review
            </Typography>
            <Typography>{selectedProfessor?.review}</Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#5E35B1" }}>
              History
            </Typography>
            <Typography>{selectedProfessor?.history}</Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#5E35B1" }}>
              Achievements
            </Typography>
            <ul>
              {selectedProfessor?.achievements.map((achievement, idx) => (
                <li key={idx}>
                  <Typography>{achievement}</Typography>
                </li>
              ))}
            </ul>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#5E35B1" }}>
              Experience
            </Typography>
            <Typography>{selectedProfessor?.experience} years</Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default page;
