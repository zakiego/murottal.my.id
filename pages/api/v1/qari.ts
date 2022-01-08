import type { NextApiRequest, NextApiResponse } from "next";

import { supabase } from "~/utils/supabase";

export default async function qariAPI(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { data, error } = await supabase
    .from("qari")
    .select("id, name, name_ar, image, social")
    .order("name", { ascending: true });

  res.status(200).json(data);
}
