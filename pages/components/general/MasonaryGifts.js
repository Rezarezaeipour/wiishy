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

export default function MasonaryGifts(props) {
  const themee = useTheme();
  const [glist, setGlist] = React.useState([]);

  useEffect(() => {
    const req = async () => {
      const res = await fetch("http://localhost:8888/gifts");
      const responsData = await res.json();
      // const gifts = responsData.filter((p) => p.profileid == props.userId);
      setGlist(responsData);
    };
    req();
  }, [props.userId]);

  return (
    <Box component="div">
      {/* <Masonry columns={2} spacing={1}>
        {glist.map((item) => (
          <div key={item.id}>
            <Link href={`/profile/ProfileEditGift/${item.id}`}>
              <div>
                <img
                  alt={item.name}
                  loading="lazy"
                  src={`/giftimages/${item.photourl}.jpg`}
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
        <div key={item.id} >
          <Link href={`/profile/ProfileEditGift/${item.id}`}>
            <Card sx={{ maxWidth: 345, mb:2 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={`/giftimages/${item.photourl}.jpg`}
                  alt={item.name}
                />
                <CardContent sx={{ backgroundColor:"white"}} >
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
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
