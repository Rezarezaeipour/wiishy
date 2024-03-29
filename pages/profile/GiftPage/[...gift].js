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
  CssBaseline,
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
import ProfileAppBar from "../../components/profile/ProfileAppBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AppBar from "@mui/material/AppBar";
import DeleteButton from "../../components/profile/DeleteButton";
import { orange, purple, red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ShareButton from "../../components/profile/ShareButton";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import BottomNav from "../../components/profile/BottomNav";
import ApiContext from "../../../context/ApiContext";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

export default function ProfileEditGift() {
  const router = useRouter();

  const [giftId, setGiftid] = React.useState(0);
  const [userId, setUserid] = React.useState(0);
  const [gift, setGift] = React.useState();

  const { giftdetail } = useContext(ApiContext);

  useEffect(() => {
    console.log(router.query.gift);
    if (router.query.gift) {
      const [gift_id, user_id] = router.query.gift;
      setGiftid(gift_id);
      setUserid(user_id);
    }
    async function DataReceive() {
      const response = await giftdetail(giftId, userId);
      if (response.gift_detail[0]) {
        setGift(response.gift_detail[0]);
      }
      console.log(response);
    }
    DataReceive();
    // console.log(['hi',giftId, userId]);
  }, [giftdetail,giftId, userId]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (gift) {
    return (
      <Container component="main" maxWidth="sm" sx={{ mb: 12, mt: 10 }}>
        <ProfileAppBar></ProfileAppBar>
        <Paper elevation={0} sx={{ my: { xs: 3, md: 6 }, p: { xs: 0, md: 0 } }}>
          <Link href={"/profile/Profile/1"}>
            <CardHeader
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
              title={gift.name}
              subheader={gift.created_at}
            />
          </Link>
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
                  alt={gift.name}
                  src={`${gift.giftImageUrl}`}
                />
              </Grid>

              <Grid p={4} pt={1}>
                <Grid item>
                  <Rating
                    sx={{ ml: 0, mb: 3 }}
                    name="size-medium"
                    max={5}
                    readOnly={true}
                    value={parseInt(gift.desire_rate)}
                  />
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
                      Product Name:
                    </Box>{" "}
                    {gift.giftName}
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
                    {gift.giftPrice}
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
                    <Link href={gift.giftUrl}>{gift.giftUrl}</Link>
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
                    {gift.giftDesc}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        <BottomNav sx={{ border: "solid thin red" }} />
      </Container>
    );
  } else {
    return (
      <Container component="main" maxWidth="sm" sx={{ mb: 12, mt: 10 }}>
        <ProfileAppBar></ProfileAppBar>

        <div>Loading...</div>

        <BottomNav sx={{ border: "solid thin red" }} />
      </Container>
    );
  }
}
