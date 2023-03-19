import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Avatar, Button, Divider, Typography } from "@mui/material";
import ProfileAppBar from "../../components/profile/ProfileAppBar";
import { orange, purple, red } from "@mui/material/colors";
import { Stack } from "@mui/system";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MasonaryGifts from "../../components/general/MasonaryGifts";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AddIcon from '@mui/icons-material/Add';
import BottomNav from "../../components/general/BottomNav"
import { useRouter } from "next/router";


const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

export default function Profile() {

  const router= useRouter();
  const {pid} = router.query;
  const [value, setValue] = React.useState("1");
  const [profile, setProfile] = React.useState({});

  React.useEffect(()=>{
    const req = async () => {
      const res = await fetch(`http://localhost:8888/users/${pid}`);
      const responseData = await res.json();
      setProfile(responseData); 
    };
    req();
  
  },[pid,setProfile]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ProfileAppBar></ProfileAppBar>

      <Container component="main" maxWidth="sm" sx={{ mb: 12, mt: 10 }}>
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
                src={`/static/images/avatar/${profile.id}.jpg`}
                sx={{ width: 100, height: 100 }}
              />
              <Typography component="div" sx={{ textAlign: "center" }}>
                <Box
                  sx={{ textTransform: "uppercase", m: 1, fontWeight: "bold" }}
                >
                  {profile.name}&nbsp;{profile.lastname}
                </Box>
                {/* <Box sx={{ textTransform: "lowercase", m: 1 }}>37</Box> */}
                <Box sx={{ textTransform: "lowercase", m: 0 }}>
                  <LocationOnOutlinedIcon /> Tehran, IRAN
                </Box>
                <Box sx={{ display:"flex", m: 1, mt: 3, justifyContent:"center" }}>
              
                    <Box sx={{mr:2}}>
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
                 
                </Box>
                <Box sx={{ display:"flex", mt:2, justifyContent:"center" }}>                  
                  <Button sx={{mr:1}} variant="contained" startIcon={<AddIcon/>}>
                     Follow
                  </Button>
                  <Button variant="contained" >
                     Message
                  </Button>
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
                  <MasonaryGifts />
                </Grid>
              </TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
            </TabContext>
          </Box>
        </Paper>
        <BottomNav/>
      </Container>
    </>
  );
}
