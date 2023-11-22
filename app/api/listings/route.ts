import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
  request: Request, 
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { 
    title,
    description,
    imageSrc,
    category,
    seatsCount,
    bagsCount,
    powerCount,
    tankCount,
    fuelCount,
    doorsCount,
    gearboxCount,
    gearboxType,
    drivetrainType,
    engineType,
    price,
    car
   } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const listing = await prisma.listing.create({
    data: {
      title: car.label,
      description,
      imageSrc,
      category,
      bagsCount,
      seatsCount,
      powerCount,
      tankCount,
      fuelCount,
      doorsCount,
      gearboxCount,
      gearboxType: gearboxType.value,
      drivetrainType: drivetrainType.value,
      engineType: engineType.value,
      carValue: car.value,
      price: parseInt(price, 10),
      userId: currentUser.id
    }
  });

  return NextResponse.json(listing);
}
