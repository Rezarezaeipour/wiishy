// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt_decode from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";


export default async function handler(req, res) {

 
  if(req.cookies.wiishytoken!=undefined){
    console.log(['hhhh',req.cookies.wiishytoken])
  var tokenn = req.cookies.wiishytoken;
  var decoded = jwt_decode(tokenn);
  console.log(["decodedd data",tokenn, decoded]);
  
  if (!tokenn && req.nextUrl.pathname.startsWith("/profile")) {
    
   
    // return NextResponse.redirect('http://localhost:3000/signIn');
  }
  else{
   
   
  }
}
else{
  console.log('222222222')
  return NextResponse.rewrite(url)
   return NextResponse.redirect(new URL("/register", req.url));
}


  if (req.method === "GET") {
    // const response = await fetch(`http://localhost:8000/600/users/31`, {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${req.cookies.wiishytoken}`,
    //   },
    // });
    // if (!response.ok) {
    // } else {
    // }
  }
}
