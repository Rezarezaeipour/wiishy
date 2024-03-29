import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import ProfileAppBar from "../components/profile/ProfileAppBar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import AccessDenied  from "../AccessDenied"

export default function ChooseWay() {

  const { data: session, status } = useSession()
  const router = useRouter();

  // if (status === "authenticated") {

    return (
      <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: 12 }}> 
        
        <ProfileAppBar></ProfileAppBar>
        <Paper elevation={0} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }  }}>
          <Box sx={{ mt: 5, border:'solid thin red' }}>
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
                    width: "100%",
                  }}
                  alt="The house from the offer."
                  src="https://placekitten.com/640/360"
                />
              </Grid>
  
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  href="#outlined-buttons"
                  sx={{ mt: 3, mb: 2, width: "100%" }}
                  xs={6}
                >
                  What I Dont Want
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  href="#outlined-buttons"
                  sx={{ mt: 3, mb: 2, width: "100%" }}
                  xs={6}
                >
                  What I Want
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    );
  // }

  // return   <Link href="/api/auth/signin">Sign in</Link>  
  // return ( () => {   router.push("/signIn") } )
  
  //  return (  
  //   <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: 12 }}>     
  //     <AccessDenied></AccessDenied>
  //   </Container>
  //  )
}
