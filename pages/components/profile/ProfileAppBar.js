import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  CardHeader,
  CssBaseline,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useRouter } from "next/router";

export default function ProfileAppBar() {
  const router = useRouter();
  // const { logOut } = useContext(AuthContext);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handLogout = () => {
   // logOut();
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    
    setState({ ...state, [anchor]: open });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ boxShadow:'0px 0px 0px #fff'}}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pt: 3,
              pb: 2,
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <Image
                src="/images/logo-blue.png"
                alt="Wiishy"
                layout="contain"
                width="126"
                height="35"
              ></Image>
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer("bottom", true)}
            >
              <MenuIcon />
            </IconButton>
            <React.Fragment>
              <SwipeableDrawer
                anchor="bottom"
                open={state.bottom}
                onClose={toggleDrawer("bottom", false)}
                onOpen={toggleDrawer("bottom", true)}
              >
                <Box
                  sx={{
                    width: "auto",
                    borderRasius: "5px 0px 0px 5px",
                  }}
                  role="presentation"
                  onClick={toggleDrawer("bottom", false)}
                  onKeyDown={toggleDrawer("bottom", false)}
                >
                  <List>
                    <ListItem
                      disablePadding
                      xs={{ width: "100%" }}
                      onClick={() => router.push("/profile/EditProfile")}
                      
                    >
                      <CardHeader
                        avatar={
                          <Avatar
                            sx={{ bgcolor: red[500] }}
                            aria-label="recipe"
                          >
                            R
                          </Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title="Reza Rezaei pour"
                        subheader="February 4, 2023"
                      />
                    </ListItem>
                    <ListItem
                      disablePadding
                      onClick={() => router.push("/profile/ProfileGiftList")}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="My Wish List" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem
                      disablePadding
                      onClick={() => router.push("/profile/ProfileAddGift")}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Wish Gifts & things" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem
                      disablePadding
                      onClick={() => router.push("/profile/ProfileAddGift")}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Unwanted Gifts & things" />
                      </ListItemButton>
                    </ListItem>
                  </List>

                  <Divider />

                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Share My Profile" />
                      </ListItemButton>
                    </ListItem>
                  </List>

                  <Divider />

                  <List>
                    <ListItem disablePadding>
                      <ListItemButton onClick={handLogout}>
                        <ListItemIcon>
                          <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Log Out" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </SwipeableDrawer>
            </React.Fragment>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}
