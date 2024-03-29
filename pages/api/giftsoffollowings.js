export default async function handler(req, res) {
  if (req.method === "POST") {
    const resApi = await fetch(
      `https://wiishy-backend.ir/api/followingsgifts/${req.body.userid}`
    );
    const responsData = await resApi.json();
    if (resApi.ok) {      
      res.status(200).json(responsData.followings_gifts);      
    }
  } else {
    // res.setHeader("Allow", ["POST"]);
  }
}
