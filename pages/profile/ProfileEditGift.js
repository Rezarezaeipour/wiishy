import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Autocomplete, Button, Typography } from "@mui/material";
import UploadButtons from "../components/general/UploadButtons";
import ProfileAvatar from "../components/general/ProfileAvatar.js";
import ProfileAppBar from "../components/profile/ProfileAppBar";
import DesireSlider from "../components/general/DesireSlider";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const theme = createTheme();

export default function ProfileAddGiftBar() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: 12 }}>
      <ProfileAppBar></ProfileAppBar>
      <Paper
       elevation={0}
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <ProfileAvatar />
            </Grid>
            <Grid
              item
              xs={12}
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ mt: -2 }}
            >
              <UploadButtons />
              <Typography variant="caption">click to Add gift image</Typography>
            </Grid>
            <Grid item xs={12} sx={{ mt: 0, pt: 0 }}>
              <TextField
                fullWidth
                id="g-link"
                label="link of the gift (If available online)"
                name="g-link"
                autoComplete="g-link"
                variant="standard"
                InputProps={{
                  endAdornment: <Button variant="text">fetch </Button>,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="g-name"
                label="Gift's name"
                id="g-name"
                autoComplete="g-name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="g-price"
                label="Gift's price"
                id="g-price"
                autoComplete="g-price"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                name="g-desc"
                label="Describe what is it and why you want it"
                id="g-desc"
                autoComplete="g-desc"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <DesireSlider xs={12}></DesireSlider>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
              <Button variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
