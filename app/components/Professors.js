import React from "react";
import {
  Container,
  Grid,
  Box,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const profiles = [
  {
    name: "Prof. Dr. Muhammad Usman Ghani Khan",
    title: "Chairman",
    image: "https://via.placeholder.com/150",
    links: ["link", "google", "linkedin"],
  },
  {
    name: "Prof. Dr. Shazia Arshad",
    title: "Professor",
    image: "https://via.placeholder.com/150",
    links: ["link"],
  },
  {
    name: "Prof. Dr. Muhammad Aslam",
    title: "Professor",
    image: "https://via.placeholder.com/150",
    links: ["link"],
  },
  {
    name: "Prof. Dr. Muhammad Awais Hassan",
    title: "Professor",
    image: "https://via.placeholder.com/150",
    links: ["link"],
  },
];

const Professors = () => {
  return (
    <Container sx={{ mt: 5, pb: 5 }}>
      <Typography variant="h4" align="center" sx={{ mb: 5 }}>
        Our Teachers
      </Typography>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        sx={{ pb: 4 }}
      >
        {profiles.map((profile, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
                p: 3,
                boxShadow: 3,
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Avatar
                alt={profile.name}
                src={profile.image}
                sx={{ width: 150, height: 150, mb: 3 }}
              />
              <Typography variant="h6" sx={{ mt: 1 }}>
                {profile.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                sx={{ mb: 2 }}
              >
                {profile.title}
              </Typography>
              <Box>
                {profile.links.includes("link") && (
                  <IconButton href="#" target="_blank">
                    <LinkIcon />
                  </IconButton>
                )}
                {profile.links.includes("google") && (
                  <IconButton href="#" target="_blank">
                    <GoogleIcon />
                  </IconButton>
                )}
                {profile.links.includes("linkedin") && (
                  <IconButton href="#" target="_blank">
                    <LinkedInIcon />
                  </IconButton>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Professors;
