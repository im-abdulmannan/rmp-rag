import React from "react";
import { Box, Grid, Typography, Button, Icon } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import GroupIcon from "@mui/icons-material/Group";
import LaptopIcon from "@mui/icons-material/Laptop";
import MicIcon from "@mui/icons-material/Mic";
import WorkIcon from "@mui/icons-material/Work";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const features = [
  {
    icon: <BookIcon fontSize="large" />,
    title: "State of the Art Curriculum",
    description:
      "Department of Computer Science actively reviews the curriculum, making amendments according to the needs of the hour with the help of industry feedback.",
  },
  {
    icon: <GroupIcon fontSize="large" />,
    title: "Qualified Faculty",
    description:
      "We have 20+ PhD qualified faculty and over 35+ total strength with experience in research, industry, and quality teaching.",
  },
  {
    icon: <LaptopIcon fontSize="large" />,
    title: "Highest Level of Accreditation",
    description:
      "Computer Science Department has achieved the highest level of accreditation by NCEAC, HEC Pakistan.",
  },
  {
    icon: <MicIcon fontSize="large" />,
    title: "Top Research Rated",
    description:
      "The Department of Computer Science is leading computing research nationally and internationally through research projects and high-impact publications.",
  },
  {
    icon: <WorkIcon fontSize="large" />,
    title: "100% Job Placement",
    description:
      "All our graduates are offered jobs by multinational and national organizations and scholarships for higher studies.",
  },
  {
    icon: <TrendingUpIcon fontSize="large" />,
    title: "Growing Subject Ranking",
    description:
      "The subject ranking of the Computer Science Department has improved over the last five years.",
  },
];

const Department = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Why Choose US?
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textAlign: "center",
                padding: "1.5rem",
                borderRadius: "8px",
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
                height: "100%",
              }}
            >
              <Icon
                sx={{
                  fontSize: "50px",
                  color: "#3f51b5",
                  marginBottom: "1rem",
                }}
              >
                {feature.icon}
              </Icon>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {feature.description}
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  padding: "0.75rem 2rem",
                  background:
                    "linear-gradient(45deg, #3f51b5 30%, #7b1fa2 90%)",
                  color: "#fff",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "30px",
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #7b1fa2 30%, #3f51b5 90%)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                Read More
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Department;
