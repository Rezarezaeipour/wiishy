// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cookie from "Cookie";

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("wiishytoken", '', {
        httpOnly: true,
        maxAge: 0, // 1 week
      })
    );
    res.json({ state: "ok" });
  }
}
