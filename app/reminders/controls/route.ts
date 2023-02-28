import { createReminder, getReminders } from "@/lib/prisma/reminders";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const { reminders, error } = await getReminders();
    if (error) throw new Error(`${error}`);
    return new Response(JSON.stringify(reminders), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: `${error.message}` }), {
      status: 500,
    });
  }
}

export async function POST(req: any) {
  try {
    const { newReminder } = await req.json();
    console.log(req);

    const { reminder, error } = await createReminder(newReminder);
    if (error) throw new Error(`${error}`);

    return new Response(JSON.stringify({ reminder }), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: `${error.message}` }), {
      status: 500,
    });
  }
}
