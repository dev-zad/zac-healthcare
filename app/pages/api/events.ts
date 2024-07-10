import type { NextApiRequest, NextApiResponse } from "next";

import { databases, ID } from "@/lib/appwrite.config"; // Ensure this is a server-side import

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, description, startTime, endTime } = req.body;

    try {
      const response = await databases.createDocument(
        process.env.DATABASE_ID!,
        process.env.EVENTS_COLLECTION_ID!,
        ID.unique(),
        {
          title,
          description,
          start_time: new Date(startTime).toISOString(),
          end_time: new Date(endTime).toISOString(),
        }
      );

      res.status(200).json(response);
    } catch (error) {
      console.error("Failed to add event", error);
      res.status(500).json({ error: "Failed to add event" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
