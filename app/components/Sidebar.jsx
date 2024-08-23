import {
  AccountCircleOutlined,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import theme from "../theme";

const SidebarComponent = ({ user }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sidebar
        backgroundColor={theme.palette.emerald[800]}
        collapsed={isCollapsed}
        rootStyles={{
          border: `1px solid ${theme.palette.emerald[900]}`,
        }}
      >
        <Menu
          rootStyles={{
            padding: "12px",
            color: theme.palette.emerald[50],
            height: "50px",
            fontFamily: "sans-serif",
            fontSize: "20px",
            fontWeight: 600,
            marginTop: "7px",
            marginBottom: "7px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: `${isCollapsed ? "center" : "space-between"}`,
              alignItems: "flex-start",
            }}
          >
            <div>{!isCollapsed && "AI Assistant"}</div>
            <div>
              {isCollapsed ? (
                <KeyboardDoubleArrowRight
                  sx={{
                    color: theme.palette.emerald[50],
                    backgroundColor: theme.palette.emerald[700],
                    cursor: "pointer",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: theme.palette.emerald[600],
                    },
                  }}
                  onClick={() => setIsCollapsed(!isCollapsed)}
                />
              ) : (
                <KeyboardDoubleArrowLeft
                  sx={{
                    color: theme.palette.emerald[50],
                    backgroundColor: theme.palette.emerald[700],
                    cursor: "pointer",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: theme.palette.emerald[600],
                    },
                  }}
                  onClick={() => setIsCollapsed(!isCollapsed)}
                />
              )}
            </div>
          </Box>
        </Menu>

        <Menu
          rootStyles={{
            borderTop: `1px solid ${theme.palette.emerald[900]}`,
            color: theme.palette.emerald[50],
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Box
            width={"100%"}
            paddingY={`${isCollapsed ? "10px" : "20px"}`}
            marginTop={`${!isCollapsed && "20px"}`}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <AccountCircleOutlined
              fontSize={`${isCollapsed ? "medium" : "large"}`}
              sx={{ color: theme.palette.emerald[50] }}
            />
          </Box>
          {!isCollapsed && (
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "16px",
                color: theme.palette.emerald[50],
              }}
            >
              <Box>{user.fullName}</Box>
              <Box>{user.emailAddresses[0].emailAddress}</Box>
            </Container>
          )}
        </Menu>
        <Menu
          rootStyles={{
            position: "absolute",
            bottom: "2px",
            width: "100%",
          }}
          menuItemStyles={{
            button: {
              background: theme.palette.emerald[700],
              width: "100% !important",
              "&:hover": {
                background: theme.palette.emerald[600],
              },
            },
          }}
        >
          <MenuItem onClick={() => setOpen(!open)}>
            <Box
              variant="text"
              sx={{
                color: theme.palette.emerald[50],
                display: "flex",
                gap: "10px",
                alignItems: "center",
                justifyContent: `${isCollapsed ? "center" : "flex-start"}`,
              }}
            >
              <OpenInNewIcon />
              {!isCollapsed && <p>Subscription</p>}
            </Box>
          </MenuItem>
        </Menu>
      </Sidebar>
      <Dialog
        open={open}
        onClose={() => setOpen(!open)}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            setOpen(false);
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SidebarComponent;
