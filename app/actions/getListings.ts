import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
  userId?: string;
  seatsCount?: number;
  bagsCount?: number;
  powerCount?: number;
  startDate?: string;
  endDate?: string;
  category?: string;
  manufacturer?: string;
  model?: string;
  carValue?: string;
  lowPrice?: number;
  highPrice?: number;
}

export default async function getListings(
  params: IListingsParams
) {
  try {
    const {
      userId,
      bagsCount, 
      seatsCount, 
      powerCount, 
      startDate,
      endDate,
      carValue,
      category,
      lowPrice,
      highPrice
    } = params;

    let query: any = {};

    if (carValue) {
      query.carValue = carValue;
    }

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    if (bagsCount) {
      query.bagsCount = {
        gte: +bagsCount
      }
    }

    if (seatsCount) {
      query.seatsCount = {
        gte: +seatsCount
      }
    }

    if (powerCount) {
      query.powerCount = {
        gte: +powerCount
      }
    }
    if (lowPrice && highPrice) {
      query.price = {
        gte: +lowPrice,
        lte: +highPrice
      }
    }

    if (startDate && endDate) {
      query.NOT = {
        reservations: {
          some: {
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate }
              },
              {
                startDate: { lte: endDate },
                endDate: { gte: endDate }
              }
            ]
          }
        }
      }
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc'
      }
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
