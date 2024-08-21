import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="text.primary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
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
      <Container maxWidth="sm">
        <Typography variant="body1">
          My sticky footer can be found here.
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
