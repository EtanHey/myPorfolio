import prisma from "@/lib/prisma";
import { setCookieExpiresInXHours } from "@/lib/utils/helpers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const existingUser = await prisma.user.findFirst({
      where: { email: email },
    });
    if (!existingUser) throw new Error("User does not exist");
    const JSONUser = JSON.stringify({ user: existingUser });
    const expiresIn = setCookieExpiresInXHours(48);
    return new Response(JSONUser, {
      status: 200,
      headers: {
        "Set-Cookie": `portfolioUser=${JSONUser}${expiresIn}`,
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
}
