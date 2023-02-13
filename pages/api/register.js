// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {

  if (req.method === "POST") {
   
      const nUser = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
      }     
      const response = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(nUser),
    });
    const responseData = await response.json(); 
    if(!response.ok){
      res.json(responseData)  
    }else
    {
      res.json({state:'ok'})  
    }   
    

  } 
}
