import prisma from "@/app/libs/prismadb";

export default async function getListings() {
  try {
    const users = await prisma.user.findMany();

    return users;
  } catch (error: any) {
    throw new Error(error);
  }
}
