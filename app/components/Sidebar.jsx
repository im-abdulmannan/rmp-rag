import {
  AccountCircleOutlined,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight
} from "@mui/icons-material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
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

const SidebarComponent = ({user}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sidebar
        backgroundColor={`${theme.palette.snuff[700]}`}
        collapsed={isCollapsed ? true : false}
        rootStyles={{
          border: `1px solid ${theme.palette.snuff[700]}`,
        }}
      >
        <Menu
          rootStyles={{
            padding: "12px",
            color: "white",
            height: "50px",
            fontFamily: "sans-serif",
            fontSize: "20px",
            fontWeight: 600,
            marginTop: "7px",
            marginBottom: "7px"
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
                    color: "white",
                    backgroundColor: theme.palette.snuff[600],
                    cursor: "pointer",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: theme.palette.snuff[500],
                    },
                  }}
                  onClick={() => setIsCollapsed(!isCollapsed)}
                />
              ) : (
                <KeyboardDoubleArrowLeft
                  sx={{
                    color: "white",
                    backgroundColor: theme.palette.snuff[600],
                    cursor: "pointer",
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: theme.palette.snuff[500],
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
            borderTop: `1px solid ${theme.palette.snuff[900]}`,
            color: "whitesmoke",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
          menuItemStyles={{}}
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
            width: "-webkit-fill-available",
          }}
          menuItemStyles={{
            button: {
              background: theme.palette.snuff[600],
              width: "100% !important",
              "&:hover": {
                background: theme.palette.snuff[500],
              },
            },
          }}
        >
          <MenuItem onClick={() => setOpen(!open)}>
            <Box
              variant="text"
              sx={{
                color: "white",
                display: "flex",
                gap: "10px",
                alignItems: "center",
                justifyContent: `${isCollapsed ? "center" : "flex-start"}`,
              }}
            >
              <OpenInNewIcon color="text.primary" />
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
            handleClose();
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
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(!open)}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SidebarComponent;