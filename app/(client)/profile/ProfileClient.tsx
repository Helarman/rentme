'use client';

import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { signOut } from "next-auth/react";

import Container from "@/app/components/Container";
import Button from "@/app/components/buttons/Button";
import ListingCard from "@/app/components/listings/ListingCard";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";

interface ListingClientProps {
  currentUser?: SafeUser | null;
  favorites: SafeListing[],
  reservations: SafeReservation[],

}

const ProfileClient: React.FC<ListingClientProps> = ({
  currentUser,
  favorites,
  reservations
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback((id: string) => {
    setDeletingId(id);

    axios.delete(`/api/reservations/${id}`)
      .then(() => {
        toast.success('Reservation cancelled');
        router.refresh();
      })
      .catch((error) => {
        toast.error(error?.response?.data?.error)
      })
      .finally(() => {
        setDeletingId('');
      })
  }, [router]);
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="You are not logged in"
          subtitle="Please login or register"
        />
      </ClientOnly>
    );
  }
  return (
    <div className="w-full">
      <div
        className="
          bg-cover 
          bg-center 
          absolute 
          top-0 
          w-full 
          h-1/2 
          bg-[url('https://res.cloudinary.com/dutv56tvx/image/upload/v1699840071/woghvhxqemub8pknoops.jpg')]"
      >
        <div
          className="
            bg-gray-700/75 
            h-full 
            w-full"
        >
        </div>
      </div>

      <div
        className="
          relative 
          pb-12 
          pt-28"
      >
        <div
          className="
              container 
              mx-auto 
              px-4"
        >
          <div>


            <div className="p-8 bg-white shadow-lg  mt-24">
              <div className="px-6  pb-12">
                <div className="flex flex-wrap justify-end">
                  
                  <div className="w-full  lg:w-4/12 px-4  flex justify-center">
                    <div className="relative">
                      <img src={currentUser?.image || '/images/placeholder.jpg'} className="w-48 h-48  mx-auto rounded-full shadow-2xl inset-x-0 top-0 -mt-24 flex items-center justify-center  " />

                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4 flex justify-end">
                    <div className=" w-full  lg:w-1/2 pt-0 sm:pt-5 ">
                      <Button
                        type='primary'
                        label="Logout"

                        onClick={() => signOut()}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" text-center border-b pb-12">
                <h1 className="text-4xl font-semibold text-gray-700">{currentUser?.name}</h1>
                <p className="font-light text-gray-600 mt-3">{currentUser?.email}</p>
              </div>


              <div className="mt-12 flex flex-col  justify-center border-b pb-12">
                <h1 className="text-4xl font-semibold text-gray-700">Trips</h1>
                <div
                  className="
                    mt-10
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4
                    xl:grid-cols-4
                    2xl:grid-cols-4
                    gap-8"
                >
                  {reservations.map((reservation: any) => (
                    <ListingCard
                      key={reservation.id}
                      data={reservation.listing}
                      reservation={reservation}
                      actionId={reservation.id}
                      onAction={onCancel}
                      disabled={deletingId === reservation.id}
                      actionLabel="Cancel"
                      currentUser={currentUser}
                      short
                    />
                  ))}
                </div>
              </div>

              <div className="mt-12 flex flex-col justify-center">
                <h1 className="text-4xl font-semibold text-gray-700">Favorites</h1>
                <div
                  className="
                mt-10
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4
                xl:grid-cols-4
                2xl:grid-cols-4
                gap-8
              "
                >
                  {favorites.map((listing: any) => (
                    <ListingCard
                      currentUser={currentUser}
                      key={listing.id}
                      data={listing}

                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProfileClient;
