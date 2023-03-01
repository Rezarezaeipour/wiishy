 import { signIn } from "next-auth/react";
import Link from "next/link";

export default function AccessDenied() {
  return (
    <>
      <h1 sx={{textAlign:"center"}}>Access Deniedd</h1>
      <p> 
        <Link href="/signIn">
          You must be signed in to view this page
        </Link>

      </p>
    </>
  );
}
