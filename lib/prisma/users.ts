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

export async function getUserByLoginInfo(
  loginInfo: Pick<User, "email" | "password">
) {
  try {
    const { email, password } = loginInfo;
    const requestedUser = await prisma.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        imageUrl: true,
      },
    });
    if (!requestedUser) {
      return { error: "User not found" };
    }
    const receivedUser = await prisma.user.findUnique({
      where: { id: requestedUser.id },
      select: {
        password: true,
      },
    });
    if (receivedUser && receivedUser.password !== password) {
      return { error: "Wrong password" };
    }
    return { data: requestedUser };
  } catch (error) {
    return { error };
  }
}
