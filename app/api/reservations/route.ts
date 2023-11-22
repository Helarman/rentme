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
    listingId,
    startDate,
    endDate,
    status,
    totalPrice,
    userEmail,
    listingName,
    listingImgSrc
   } = body;

   if (!listingId || !startDate || !endDate || !totalPrice || !status || !userEmail || !listingName || !listingImgSrc )  {
    return NextResponse.error();
  }

  const listingAndReservation = await prisma.listing.update({
    where: {
      id: listingId
    },
    data: {
      reservations: {
        create: {
          userId: currentUser.id,
          startDate,
          endDate,
          totalPrice,
          status,
          userEmail,
          listingName,
          listingImgSrc
        }
      }
    }
  });

  return NextResponse.json(listingAndReservation);
}
