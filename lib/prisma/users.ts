import { User } from "@prisma/client";
import prisma from ".";

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (error) {
    return { error };
  }
}

export async function createUser(user: Omit<User, "id">) {
  try {
    const userFromDB = await prisma.user.create({
      data: user,
    });
    return { user: userFromDB };
  } catch (error) {
    return { error };
  }
}

export async function getUserById(id: User["id"]) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return { user };
  } catch (error) {
    return { error };
  }
}
