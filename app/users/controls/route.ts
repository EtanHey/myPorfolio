import { createUser, getUsers } from "@/lib/prisma/usersCont";
import { User } from "@prisma/client";

export async function GET() {
  try {
    const users = await getUsers();
    return new Response(JSON.stringify(users), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: `${error.message}` }), {
      status: 500,
    });
  }
}

export async function POST(req: Request) {
  try {
    const data: Omit<User, "id"> = await req.json();
    const { user, error } = await createUser(data);
    if (error) throw new Error(`${error}`);
    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: `${error.message}` }), {
      status: 500,
    });
  }
}
