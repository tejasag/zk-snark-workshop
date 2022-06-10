import type { NextApiResponse, NextApiResponse } from "next";

type Data = {
    hearts: number;
};

export default async (req: NextApiRequest, res: NextApiResult<Data>) => {
    if (req.method === "POST") {
        await supabase
            .from("hearts")
            .update({ count: req.body.hearts })
            .eq("id", 1);
        return res.status(200).json({ hearts: req.body.hearts });
    }
    else if (req.method === "GET") {
    }
};
