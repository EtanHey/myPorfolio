import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestedToken = request.nextUrl.searchParams.values().next().value;
  const cookieStore = cookies();
  const value = cookieStore.get(`${requestedToken}`);
  console.log(value);

  return new Response(JSON.stringify(value), {
    status: 200,
  });
}
