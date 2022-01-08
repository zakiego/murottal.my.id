import type { NextApiRequest, NextApiResponse } from "next";

import { supabase } from "~/utils/supabase";

export default async function pingAPI(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method != "POST") return res.status(200).json({ error: true });

  const { qari_id, type } = req.body;

  const { error } = await supabase
    .from("qari_stats")
    .insert([{ qari_id, type }]);

  if (error) {
    console.log(error);
    return res.status(200).json({ error: true });
  }

  res.status(200).json({ error: false });
}
