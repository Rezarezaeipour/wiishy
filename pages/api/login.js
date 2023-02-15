// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cookie from "Cookie"

export default async function handler(req, res) {

  if (req.method === "POST") {
   
      const nUser = {        
        email: req.body.email,
        password: req.body.password,
      }     
      const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(nUser),
    });
    const responseData = await response.json(); 

    //We dont want to return Token to Front-End, So if it is Ok, we return just state:ok!
    if(!response.ok){
      res.json(responseData)  
    }else
    { 
    //Here we save our token in Cookie with http only access. These are part of our procedures to secure our user's information
    //Find cookie package here: https://www.npmjs.com/package/cookie   
      
      res.setHeader('Set-Cookie',cookie.serialize('Token', responseData.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 week
    }))

    res.json({state:'ok'})   

    }   

   

  } 
}
