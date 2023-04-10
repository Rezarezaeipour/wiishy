
export default function handler(req, res) 
{

  if (req.method === "POST") {     
   
      const aa = async () => {
      const res = await fetch(
        `https://wiishy-backend.ir/api/followingsgifts/${req.body.userid}`
      );
      const responsData = await res.json(); 
      // console.log(['hhhh',responsData])  
      return responsData;
    }; 
    aa();
    // res.status(200).json({ msg: aa() });

  } else {
    // res.setHeader("Allow", ["POST"]);
  }

}
