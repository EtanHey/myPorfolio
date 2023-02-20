import { createReminder, getReminders } from "@/lib/prisma/reminders";
import { NextApiRequest, NextApiResponse } from "next";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { reminders, error } = await getReminders();
      if (error) throw new Error(`${error}`);
      return res.status(200).json({ reminders });
    } catch (error: any) {
      return res.status(500).json({ error: `${error.message}` });
    }
  }
  if (req.method === "POST") {
    try {
      const data = req.body;
      const { reminder, error } = await createReminder(JSON.parse(data));
      if (error) throw new Error(`${error}`);
      return res.status(200).json({ reminder });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
  res.setHeader("Allow", ["GET", "POST"]);
  res.status(425).end(`Medthod ${req.method} is not allowed`);
};
export default handler;
