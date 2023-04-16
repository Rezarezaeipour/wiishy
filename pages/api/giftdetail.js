
export default async function handler(req, res) {
  if (req.method === "POST") {
    const resApi = await fetch(
      `https://wiishy-backend.ir/api/giftdetail/${req.body.giftid}/${req.body.userid}`
    );
    const responsData = await resApi.json();
    if (resApi.ok) {      
      res.status(200).json(responsData);       
    }
  } else {
    // res.setHeader("Allow", ["POST"]);
  }
}
