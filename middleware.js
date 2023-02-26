import { NextRequest, NextResponse } from 'next/server'
import jwt_decode from "jwt-decode";

export default async function middleware(req,res) {
 
  //  const cc=await req.cookies.get('wiishytoken');
  // //  console.log(['middleware',req])
  //   console.log(['middleware',req.cookies.get('wiishytoken')])
   
 
  // if (!cc && req.nextUrl.pathname.startsWith('/profile')) {
  //   return NextResponse.redirect(new URL('/register', req.url))
  // }

  
}
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     '/((?!|_next/static|_next/image|favicon.ico).*)',
//   ],
// }
