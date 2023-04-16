import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ApiContext from "../../../context/ApiContext";
import { useContext,useState } from "react";

export default function MasonaryGifts(props) {

  const { giftsoffollowings} = useContext(ApiContext);
  const themee = useTheme();
  const [glist, setGlist] = useState([]);

  useEffect( () => {
    async function DataReceive() {     
      const response = await giftsoffollowings(1) ;    
      setGlist(response)      
    }  
    DataReceive();   
    //  setGlist(response) 
  }, [giftsoffollowings]);

  return (
    <Box component="div">
     
      {/* <Masonry columns={2} spacing={1}>
        {glist.map((item) => (
          <div key={item.id}>
            <Link href={"/profile/ProfileEditGift/5"}>
              <div>
                <img
                  alt={item.giftName}
                  loading="lazy"
                  src={`${item.giftImageUrl}`}
                  style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: "block",
                    width: "100%",
                  }}
                />
                <p>{item.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </Masonry> */}

      {glist.map((item) => (      
        <div key={item.giftid} >
          <Link href={`/profile/GiftPage/${item.gift_id}`}>
            <Card sx={{ maxWidth: 345, mb:2 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={`${item.giftImageUrl}`}
                  alt={item.giftName}
                />
                <CardContent sx={{ backgroundColor:"white"}} >
                  <Typography gutterBottom variant="h5" component="div">
                    {item.giftName}
                    
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </div>
      ))}
    </Box>
  );
}
