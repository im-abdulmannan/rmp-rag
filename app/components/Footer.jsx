import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

function Copyright() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTitle(document.title);
    }
  }, []);

  return (
    <Typography variant="body2" color="text.primary">
      {"Copyright © "}
      <Link color="inherit" href="/">
        {title}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.snuff[700],
      }}
    >
      <Container maxWidth="md">
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
