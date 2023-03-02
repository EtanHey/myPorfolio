import prisma from "@/lib/prisma";
import cloudinary from "@/lib/utils/cloudinary";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, lastName, image } = await req.json();
    const userExists = await prisma.user.findFirst({
      where: { email },
    });
    if (userExists) throw new Error("User already exists");
    const result = await cloudinary.uploader.upload(image, {
      folder: "profilePictures",
      filename_override: `${firstName} ${lastName}'s profile picture`,
    });
    if (!result) throw new Error("Failed to upload image");
    const user = await prisma.user.create({
      data: { email, firstName, lastName, imageUrl: result.secure_url },
    });
    const res = NextResponse.next();
    res.cookies.set("portfolioUser", `${user}`);
    return new Response(JSON.stringify({ user }), {
      status: 201,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 400,
    });
  }
}
