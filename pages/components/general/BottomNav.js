import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SmsIcon from '@mui/icons-material/Sms';
import PersonIcon from '@mui/icons-material/Person';

const StyledFab = styled(Fab)({
  margin: "0 auto",
});
export default function BottonNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        border: "1px thin red",
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} sx={{pr:3}}/>
        <BottomNavigationAction label="Search" icon={<SearchIcon />} sx={{pr:3}}/>
        <BottomNavigationAction label="Updates" icon={<SmsIcon />} sx={{pr:3}}/>
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} sx={{pr:6}}/>
        <StyledFab color="secondary" aria-label="add">
          <AddIcon />
        </StyledFab>
      </BottomNavigation>
    </Paper>
  );
}
