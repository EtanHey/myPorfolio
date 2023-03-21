import { getUserByLoginInfo } from "@/lib/prisma";
import { User } from "@prisma/client";

export async function POST(req: any) {
  try {
    const { userInfo } = await req.json();
    const { email, password } = userInfo;
    const { data } = await getUserByLoginInfo({
      email,
      password,
    });
    if (data) {
      const receivedUser: Omit<User, "password"> = data;
      return new Response(JSON.stringify({ receivedUser }), {
        status: 200,
      });
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ error: `${error.message}` }), {
      status: 500,
    });
  }
}
