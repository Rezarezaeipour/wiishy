import { NextResponse } from "next/server";

export default async function middleware(req, res) {

  
  if (req.nextUrl.pathname.startsWith("/profile")) {

    console.log("here!!!");   
    return NextResponse.redirect("http://localhost:3000/register");

  } else {
    //  return NextResponse.redirect("http://localhost:3000/register22")
  }

}
