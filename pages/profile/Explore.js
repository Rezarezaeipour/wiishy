import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ProfileAppBar from "../components/profile/ProfileAppBar";
import { orange, purple, red } from "@mui/material/colors";
import MasonaryGifts from "../components/general/MasonaryGifts";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BottomNav from "../components/general/BottomNav"




export default function Profile() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (     

    <Container component="main" maxWidth="sm" sx={{ mb: 12, mt: 10 }}>
       <ProfileAppBar></ProfileAppBar>
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
                  <Tab label="Friend's want" value="1" />
                  <Tab label="Gift idea" value="2" />
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
      

  );
}
