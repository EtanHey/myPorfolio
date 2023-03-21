import { PrismaClient } from "@prisma/client";
import {
  addProject,
  getProjectById,
  getProjects,
  deleteProject,
} from "./projectsCont";
import {
  getReminders,
  createReminder,
  getRemindersById,
} from "./remindersCont";
import {
  createUser,
  getUserById,
  getUserByLoginInfo,
  getUsers,
} from "./usersCont";
const prisma = new PrismaClient();
export {
  addProject,
  getProjectById,
  getProjects,
  getReminders,
  createReminder,
  getRemindersById,
  createUser,
  getUserById,
  getUserByLoginInfo,
  getUsers,
  deleteProject,
};
export default prisma;
