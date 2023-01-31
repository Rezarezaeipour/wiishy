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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Autocomplete, Button, Typography } from "@mui/material";
import UploadButtons from "../components/general/UploadButtons";
import ProfileAvatar from "../components/general/ProfileAvatar.js";
import ProfileAppBar from "../components/profile/ProfileAppBar";
import DesireSlider from "../components/general/DesireSlider";  
 

const theme = createTheme();


export default function ProfileAddGiftBar() {
  
  
  const[glink,setGlink]=useState('');
  const[gname,setGname]=useState('');
  const[gprice,setGprice]=useState('');
  const[gdesc,setGdesc]=useState('');
  const[gdesire,setGdesire]=useState('');


  const handleSubmit = (event) => {

    event.preventDefault();

    // This seems a bit oldfashion so we use STATEs
    //const data = new FormData(event.currentTarget);
    // setGlink(data.get('g-link'));
    // setGname(data.get('g-name'));
    // setGprice(data.get('g-price'));  
    // setGdesc(data.get('g-desc'));
    // setGdesire(data.get('g-desire'));     

      const id= Math.floor(Math.random()*10000)
      const newGift ={ id:id, ...{link:glink,name:gname,price:gprice,description:gdesc,desire:gdesire}}
     
      addProduct(newGift);
      setGlink('');
      setGname('');
      setGprice('');
      setGdesc('');
  };

  const addProduct = async(product) => {
    const response= await fetch('http://localhost:8888/gifts',{
      method: 'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(product)
    })
    const responseData = await response.json();
  }
     
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: 12 }}>
      <ProfileAppBar></ProfileAppBar>
      <Paper elevation={0} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                  onChange={(e) => {setGlink(e.target.value)}}
                  value={glink}
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
                  onChange={(e) => {setGname(e.target.value)}}
                  value={gname}
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
                  onChange={(e) => {setGprice(e.target.value)}}
                  value={gprice}
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
                  onChange={(e) => {setGdesc(e.target.value)}}
                  value={gdesc}
                />
              </Grid>
              <Grid item xs={12}>
                <DesireSlider xs={12}></DesireSlider>
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Add To List
                </Button>
              </Grid>
         
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}
