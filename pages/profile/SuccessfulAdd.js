import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Autocomplete, Button, Typography } from "@mui/material";
import ProfileAppBar from "../components/profile/ProfileAppBar"


const theme = createTheme();

export default function SuccessfulAdd() {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      {/* <ProfileAppBar></ProfileAppBar> */}

      <Container component="main" maxWidth="sm" sx={{ mb: 4, mt:10  }}>
        <Paper
          elevation={0}
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Box sx={{ mt: 5 }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  component="img"
                  sx={{                  
                    width: '100%'                  
                  }}
                  alt="The house from the offer."
                  src="https://placekitten.com/640/360"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  href="#outlined-buttons"
                  sx={{ mt: 3, mb: 2, width: "100%" , mx:'auto' }}
                  xs={6}
                >
                  Let's see profile
                </Button>
              </Grid> 

            </Grid>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
