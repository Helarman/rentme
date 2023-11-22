
import { Listing, Reservation, User, Manufacturers } from "@prisma/client";

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type SafeReservation = Omit<
  Reservation, 
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type ListingType = Omit<Listing,  "title" | "imageSrc" | "id" | "description" | "seatsCount" | "bagsCount" | "powerCount" | "category" | "fuelCount" | "tankCount" | "gearBoxCount" | "engineType" | "gearBoxType" | "drivetrainType" | "manufacturer" | "model" | "carValue"
> & {
  title: string;
  imageSrc: string;
  id: string;
  description: string;
  seatsCount: number;
  bagsCount: number;
  powerCount: number;
  category: string;
  fuelCount: number;
  tankCount: number;
  gearBoxType: string;
  engineType: string;
  gearBoxCount: number;
  manufacturer: string;
  model: string;
  carValue: string;
  drivetrainType: string
  doorsCount: number

}

export type UserType = Omit<User, "id" | "name" | "email" | "image" | "role"
> & {
  id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}


export type ManufacturerType = Omit<Manufacturers, "id" | "name" | "shortName" 
> & {
  id: string;
  name: string;
  shortName: string;
}

