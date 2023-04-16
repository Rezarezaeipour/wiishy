import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SmsIcon from '@mui/icons-material/Sms';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from "next/router"

const StyledFab = styled(Fab)({
  margin: "0 auto",
});
export default function BottonNav() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
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
        // showlabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={() => router.push("/")} label="Home" icon={<HomeIcon />} sx={{pr:3}}/>
        <BottomNavigationAction onClick={() => router.push("/profile/Explore")} label="Explore" icon={<SearchIcon />} sx={{pr:3}}/>
        <StyledFab onClick={() => router.push("/profile/AddGift")} color="secondary" aria-label="add">
          <AddIcon />
        </StyledFab>
        <BottomNavigationAction onClick={() => router.push("/")} label="Updates" icon={<SmsIcon />} sx={{pr:3}}/>
        <BottomNavigationAction onClick={() => router.push("/profile/MyProfile")} label="Profile" icon={<PersonIcon />} sx={{pr:6}}/>
       
      </BottomNavigation>
    </Paper> 
  );
}
