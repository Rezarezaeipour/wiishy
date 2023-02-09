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
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function Register() {

  const[Name,setName]=useState('');
  const[LastName,setLastName]=useState('');
  const[Email,setEmail]=useState('');
  const[Password,setPassword]=useState('');
  const[Confirmpassword,setConfirmpassword]=useState('');
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    if(Password===Confirmpassword)
    {
    const id= Math.floor(Math.random()*10000)
    const newUser ={name:Name,lastname:LastName,email:Email,password: Password}   
    
      registerUser(newUser);
      setName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmpassword('');

    }
    else{
      setOpen(true);
    }
       
  };

  const registerUser = async (nUser) =>
  {
    const response = await fetch('http://localhost:8000/users',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(nUser)
    })
    const responseData = await response.json();
  } 

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Snackbar
        severity="error"
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        
      >
        <Alert  severity="warning" sx={{ width: '100%' }}>
          This is a success message!
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
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                variant="standard"
                onChange={(e) => {setName(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                variant="standard"
                onChange={(e) => {setLastName(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                variant="standard"
                onChange={(e) => {setEmail(e.target.value)}}
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
                onChange={(e) => {setPassword(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="confirmpassword"
                label="Confirm password"
                name="confirmpassword"
                type="password"
                autoComplete="confirmpassword"
                variant="standard"
                onChange={(e) => {setConfirmpassword(e.target.value)}}
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
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
