'use client';

import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { SafeReservation, SafeUser } from "@/app/types";

import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";

interface TripsClientProps {
  reservations: SafeReservation[],
  currentUser?: SafeUser | null,
}

const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser
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

  return (
    <div className="w-full">
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

          <div
            className="
              mb-4
              flex 
              flex-wrap 
              -mx-4 
              justify-start"
          >
            <div
              className="
                px-4 
                relative
                w-full 
                lg:w-8/12 
                text-left">
              <h1
                className="
                  text-3xl 
                  font-bold 
                  mt-3 
                  mb-1 
                  text-gray-700"
              >
                Trips
              </h1>

              <p
                className="
                  mt-2 
                  mb-4 
                  text-xl 
                  leading-relaxed 
                  text-gray-500"
              >
                Your wonderful trips
              </p>
            </div>
          </div>
          <div
            className="
              mt-4 
              lg:mt-8 
              lg:grid 
              lg:grid-cols-4 
              lg:items-start 
              lg:gap-8"
          >

            {reservations.map((reservation: any) => (
              <ListingCard
                short
                key={reservation.id}
                data={reservation.listing}
                reservation={reservation}
                actionId={reservation.id}
                onAction={onCancel}
                disabled={deletingId === reservation.id}
                actionLabel="Cancel"
                currentUser={currentUser}
              />

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripsClient;