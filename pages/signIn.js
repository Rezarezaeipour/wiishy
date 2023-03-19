import { React, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { loadingButtonClasses } from "@mui/lab";
import { useContext } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";


export default function Register() {

  const router = useRouter();

  return (    
    <Container component="main" maxWidth="xs" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "40%",
            marginBottom: "70px",
          }}
          alt="WiiShy..."
          src="images/logo-blue.png"
        />
        <Typography variant="h1" fontSize="30px">
          Login to your Wiishy
        </Typography>
        <Box
          component="img"
          sx={{
            width: "70%",
            marginBottom: "30px",
          }}
          alt="WiiShy..."
          src="images/visual-identity.png"
        />
        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography  variant="p">
          No need to register, Just dive in
        </Typography>
        
        <Box component="form" sx={{ mt: 3 }}>
          <Grid container spacing={2}></Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // onClick={() => signIn("google", {callbackUrl: 'http://localhost:3000/profile/ChooseWay'},) }
            onClick={()=> router.push("/profile/Explore")}
          >
            Sign in with Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
