'use server'

import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
  createdAt?: string;
  userId?: string;
  authorId?: string;
  status?: string;
  userEmail?: string;
  listingName?: string;
  listingImgSrc?: string;
  oldDate?: string,
  newDate?: string
}

export default async function getReservations(
  params: IParams
) {
  try {
    const { listingId, userId, authorId, status } = params;

    const query: any = {};
        
    if (listingId) {
      query.listingId = listingId;
    };

    if (userId) {
      query.userId = userId;
    }

    if (status) {
      query.status = status;
    }

    if (authorId) {
      query.listing = { userId: authorId };
    }
     
    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    const safeReservations = reservations.map(
      (reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing.createdAt.toISOString(),
      },
    }));

    return safeReservations;
  } catch (error: any) {
    throw new Error(error);
  }
}
