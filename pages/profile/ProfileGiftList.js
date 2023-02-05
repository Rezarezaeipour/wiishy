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
import { useEffect } from "react";

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
       
      >
          <Box sx={{ mt: 5 }}>
            <TabContext value={value}>

              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}                 
                >
                  <Tab label="Want" value="1"  sx={{py:3}}/>
                  <Tab label="Don't Want" value="2"  sx={{py:3}}/>
                </TabList>
              </Box>

              <TabPanel value="1"  sx={{ px:0 , py:5}}>
                <Grid container spacing={0}>
                  <MasonaryGifts userId="444"/>
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
