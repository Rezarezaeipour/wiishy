import * as React from "react";
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
import { useState, useEffect } from "react";
import { Alert, Snackbar } from "@mui/material";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";

export default function Register() {
  const { registerUser} = useContext(AuthContext);

  /// Fields
  const [Name, setName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Confirmpassword, setConfirmpassword] = useState("");

  ///Alert
  let alertInfo = { message: "!", severity: "error" };
  const [alert, setAlert] = useState(alertInfo);
  const [open, setOpen] = React.useState(false);


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      Password != "" &&
      Confirmpassword != "" &&
      Name != "" &&
      LastName != "" &&
      Email != ""
    ) {
      if (Password === Confirmpassword) {
        const newUser = {
          name: Name,
          lastname: LastName,
          email: Email,
          password: Password,
        };       
        
        
        var response
        const welcome = new Promise(function (resolve, reject) {          
          response = registerUser(newUser);
          resolve(response);
        });       

        welcome.then(function (response) {
          console.log(response)  
          if (!response.accessToken) { 
            alertInfo = {
                   message: response,
                   severity: "error",
                 };
                 setAlert(alertInfo);
                 setOpen(true);
         } else { 
          alertInfo = {
                message: "You've almost there",
                severity: "success",
              };
              setAlert(alertInfo);
              setOpen(true);
              // router.push('/profile/ChooseWay')

              setName("");
              setLastName("");
              setEmail("");
              setPassword("");
              setConfirmpassword("");
         }    
        });        
       

      } else {
        alertInfo = {
          message: "The password is not match to the confirm password",
          severity: "error",
        };
        setAlert(alertInfo);
        setOpen(true);
      }
    } else {
      alertInfo = {
        message: "Please fill all the fields",
        severity: "error",
      };
      setAlert(alertInfo);
      setOpen(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Snackbar
        severity={alert["severity"]}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={alert["message"]}
      >
        <Alert severity={alert["severity"]} sx={{ width: "100%" }}>
          {alert.message}
        </Alert>
      </Snackbar>
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
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={Name}
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                variant="standard"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={LastName}
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                variant="standard"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={Email}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                variant="standard"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={Password}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="standard"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={Confirmpassword}
                required
                fullWidth
                id="confirmpassword"
                label="Confirm password"
                name="confirmpassword"
                type="password"
                autoComplete="confirmpassword"
                variant="standard"
                onChange={(e) => {
                  setConfirmpassword(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Tired of shit gfits and wanna change this situation"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signIn" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
