import { NextApiRequest, NextApiResponse } from "next";

export default async function Saran(req: NextApiRequest, res: NextApiResponse) {
  const { text } = req.body;
  const { ok } = await fetch(process.env.NEXT_PUBLIC_TELEGRAM_URL as string, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.NEXT_PUBLIC_TELEGRAM_ID,
      text,
    }),
  }).then((resp) => resp.json());

  return res.json({ ok });
}
