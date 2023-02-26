import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import {
  Autocomplete,
  Avatar,
  Badge,
  Button,
  CardHeader,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import ProfileAppBar from "../components/profile/ProfileAppBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AppBar from "@mui/material/AppBar";
import DeleteButton from "../components/profile/DeleteButton";
import { orange, purple, red } from "@mui/material/colors";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPanel } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";
import ShareIcon from "../components/profile/ShareButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ShareButton from "../components/profile/ShareButton";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

export default function ProfileEditGift() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 12, mt: 10 }}>
      {/* <ProfileAppBar></ProfileAppBar> */}
      <Paper
        elevation={0}
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 0, md: 0 } }}
      >
        <CardHeader
          sx={{ bgcolor: "text.disabled" }}
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in"
          subheader="September 14, 2016"
        />
        <Box sx={{ mt: 0 }}>
          <Grid container spacing={2} sx={{ mb: 3 }}>
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
                src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51QxA-98Q+L._AC_SX522_.jpg"
              />
            </Grid>

            <Grid
              item
              xs={12}
              pr={2}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid>
                <Rating sx={{ ml: 2 }} name="size-medium" defaultValue={2} />
              </Grid>
              <Grid>
                <Badge
                  color="secondary"
                  badgeContent={0}
                  showZero
                  sx={{ mr: 2 }}
                >
                  <FavoriteBorderIcon />
                </Badge>

                <Badge color="secondary" badgeContent={0} showZero>
                  <VisibilityIcon />
                </Badge>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Paper
        elevation={0}
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <TabContext value={value}>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Details" value="1" />
              <Tab label="Viewed" value="2" />
            </Tabs>
          </Box>

          {/* TAB ONE */}
          <TabPanel value="1">
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid
                item
                xs={12}
                container
                direction="row"
                justifyContent="left"
                alignItems="center"
              >
                <Typography>
                  <Box
                    component="span"
                    sx={{
                      fontWeight: "bold",
                      m: 1,
                      ml: 0,
                      textTransform: "uppercase",
                    }}
                  >
                    Product Name:
                  </Box>{" "}
                  Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone
                  Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                container
                direction="row"
                justifyContent="left"
                alignItems="center"
              >
                <Typography>
                  <Box
                    component="span"
                    sx={{
                      fontWeight: "bold",
                      m: 1,
                      ml: 0,
                      textTransform: "uppercase",
                    }}
                  >
                    Product Price:
                  </Box>{" "}
                  $450
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                container
                direction="row"
                justifyContent="left"
                alignItems="center"
              >
                <Typography>
                  <Box
                    component="span"
                    sx={{
                      fontWeight: "bold",
                      m: 1,
                      ml: 0,
                      textTransform: "uppercase",
                    }}
                  >
                    Product link:
                  </Box>{" "}
                  <Link href="https://amazon.com/product/hewuuwhewweoiewhiewohewi">
                    https://amazon.com/product/hewuuwhewweoiewhiewohewi
                  </Link>
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                container
                direction="row"
                justifyContent="left"
                alignItems="center"
              >
                <Typography>
                  <Box
                    component="span"
                    sx={{
                      fontWeight: "bold",
                      m: 1,
                      ml: 0,
                      textTransform: "uppercase",
                    }}
                  >
                    Your Description:
                  </Box>{" "}
                  I have love it for more than a year, It is so expensive
                </Typography>
              </Grid>
            </Grid>
          </TabPanel>

          {/* TAB TWO */}
          <TabPanel value="2">
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
              </ListItem>
            </List>
          </TabPanel>
        </TabContext>
      </Paper>
      <AppBar
        position="fixed"
        color="secondary"
        sx={{ top: "auto", bottom: 0 }}
      >
        <Toolbar>
          <Box
            sx={{
              position: "absolute",
              zIndex: 1,
              top: -30,
              left: 0,
              right: 0,
              margin: "0 auto",
            }}
            color="secondary"
            aria-label="add"
          >
            <Grid
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 4,
                p: 2,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <DeleteButton></DeleteButton>
                <ShareButton></ShareButton>
              </Box>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Container>
  );
}
