import BookIcon from "@mui/icons-material/Book";
import GroupIcon from "@mui/icons-material/Group";
import LaptopIcon from "@mui/icons-material/Laptop";
import MicIcon from "@mui/icons-material/Mic";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WorkIcon from "@mui/icons-material/Work";
import { Box, Container, Grid, Icon, Typography } from "@mui/material";
import theme from "../theme";

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
    <Box sx={{ padding: "2rem", my: "4rem" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Why Choose Us?
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
                  boxShadow: 3,
                  backgroundColor: "white",
                  height: "100%",
                }}
              >
                <Icon
                  sx={{
                    fontSize: "50px",
                    color: theme.palette.emerald[600],
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
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Department;
