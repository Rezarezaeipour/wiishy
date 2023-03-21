import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import {
  Autocomplete,
  Avatar,
  Badge,
  Button,
  CardHeader,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import ProfileAppBar from "../components/profile/ProfileAppBar";
import { Stack } from "@mui/system";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MasonaryGifts from "../components/general/MasonaryGifts";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BottomNav from "../components/profile/BottomNav";
import { useRouter } from "next/router";

export default function ProfileMyProfile() {
  const [value, setValue] = React.useState("1");
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 12, mt: 10 }}>
      <ProfileAppBar></ProfileAppBar>
      <Paper
        elevation={0}
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 0, md: 0 } }}
      >
        <Box sx={{ mt: 0, py: 5, pb: 4 }}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 100, height: 100 }}
            />
            <Typography component="div" sx={{ textAlign: "center" }}>
              <Box
                sx={{ textTransform: "uppercase", m: 1, fontWeight: "bold" }}
              >
                Reza Rezaeipour
              </Box>
              {/* <Box sx={{ textTransform: "lowercase", m: 1 }}>37</Box> */}
              <Box sx={{ textTransform: "lowercase", m: 0 }}>
                <LocationOnOutlinedIcon /> Tehran, IRAN
              </Box>
              <Box sx={{ textTransform: "lowercase", m: 1, mt: 3 }}>
                <Stack
                  direction="row"
                  divider={<Divider orientation="vertical" flexItem />}
                  spacing={2}
                >
                  <Box>
                    Follower
                    <br />
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                      345
                    </Box>
                  </Box>
                  <Box>
                    Following
                    <br />
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                      780
                    </Box>
                  </Box>
                </Stack>
              </Box>
              <Box component="div" sx={{ mt: 2 }}>
                <Button variant="contained" onClick={()=> router.push("/profile/EditProfile") }>Edit Profile</Button>
              </Box>
            </Typography>
          </Stack>
        </Box>
      </Paper>
      <Paper
        elevation={0}
        sx={{ my: { xs: 0, md: 6 }, p: { xs: 0, md: 0 } }}
      >
        <Box sx={{ mt: 0 }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Want" value="1" />
                <Tab label="Don't Want" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Grid container spacing={2}>
                <MasonaryGifts  userId="444" />
              </Grid>
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
          </TabContext>
        </Box>
      </Paper>
      <BottomNav/>
    </Container>
  );
}
