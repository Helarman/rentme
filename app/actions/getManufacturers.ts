import prisma from "@/app/libs/prismadb";

export default async function getManufacturers() {
  try {
    const manufacturers = await prisma.manufacturers.findMany();

    return manufacturers;
  } catch (error: any) {
    throw new Error(error);
  }
}
