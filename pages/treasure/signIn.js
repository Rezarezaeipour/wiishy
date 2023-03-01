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
import AuthContext from "./context/AuthContext";
import { signIn } from "next-auth/react"


export default function Register() {

  // const { logIn }  = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newarg = { email: username, password: password };
    // logIn(newarg);    
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                variant="standard"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="standard"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/profile/ChooseWay' })}
          >
            Sign in with Google
          </Button>
        
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/register" variant="body2">
                Dont have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
