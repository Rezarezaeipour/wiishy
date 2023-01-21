import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import MasonaryGifts from "../components/general/MasonaryGifts";
import ProfileAppBar from "../components/profile/ProfileAppBar";
import ProfileAddGiftBar from "../components/profile/ProfileAddGiftBar";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const theme = createTheme();

export default function ProfileGiftList() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
  
    
    <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: 12 }}>
        <ProfileAppBar></ProfileAppBar>
        <Paper
        elevation={0}
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
          <Box sx={{ mt: 5 }}>
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
        <ProfileAddGiftBar></ProfileAddGiftBar>
      </Container>
   
   
  );
}
