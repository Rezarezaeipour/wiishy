// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt_decode from "jwt-decode";


export default async function handler(req, res) {
  var tokenn = req.cookies.Token;
  var decoded = jwt_decode(tokenn);

  if (req.method === "GET") {
    const response = await fetch(`http://localhost:8000/600/users/31`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${req.cookies.Token}`,
      },
    });
    const responseData = await response.json();
    // console.log(['decoded data',decoded])
    // console.log(responseData);
    // console.log("goo0");

    if (!response.ok) {
     

     
    } else {
    }
  }
}
