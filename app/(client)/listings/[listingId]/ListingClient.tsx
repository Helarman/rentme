'use client';

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { Range } from "react-date-range";
import { useRouter } from "next/navigation";
import { differenceInDays, eachDayOfInterval } from 'date-fns';

import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";

import Container from "@/app/components/Container";
import { categories } from "@/app/components/navigation/Categories";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";
import ListingReservation from "@/app/components/listings/ListingReservation";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection'
};

interface ListingClientProps {
  reservations?: SafeReservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  reservations = [],
  currentUser
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const disabledDates = useMemo(() => {
    let dates: Date[] = [];

    reservations.forEach((reservation: any) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate)
      });

      dates = [...dates, ...range];
    });

    return dates;
  }, [reservations]);

  const category = useMemo(() => {
    return categories.find((items) =>
      items.label === listing.category);
  }, [listing.category]);

  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);

  const onCreateReservation = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    setIsLoading(true);

    axios.post('/api/reservations', {
      totalPrice,
      status: 'created',
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      listingId: listing?.id,
      listingName: listing?.title,
      listingImgSrc: listing?.imageSrc,
      userEmail: currentUser?.email
    })
      .then(() => {
        toast.success('Car reserved!');
        setDateRange(initialDateRange);
        router.push('/trips');
      })
      .catch(() => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      })
  },
    [
      totalPrice,
      dateRange,
      listing?.id,
      router,
      currentUser,
      loginModal,

    ]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(
        dateRange.endDate,
        dateRange.startDate
      );

      if (dayCount && listing.price) {
        setTotalPrice(dayCount * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  }, [dateRange, listing.price]);
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
                {listing.title}
              </h1>
            </div>
          </div>
          <div
            className="
              flex 
              flex-wrap
              mx-auto 
              sm:flex-nowrap
              justify-between"
          >
            <div className="md:pr-0 relative w-full md:w-6/12  ">
              <img className="w-full rounded-xl" src={listing.imageSrc} />
            </div>

            <div className="md:pr-0 relative w-full md:w-2/12  ">
              <ListingInfo
                title={listing.title}
                user={listing.user}
                description={listing.description}
                bagsCount={listing.bagsCount}
                seatsCount={listing.seatsCount}
                powerCount={listing.powerCount}
              />
            </div>

            <div className="md:pr-0 px-4 relative w-full md:w-3/12">
              <ListingReservation
                price={listing.price}
                totalPrice={totalPrice}
                onChangeDate={(value) => setDateRange(value)}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                disabledDates={disabledDates}
              />
            </div>

          </div>
        </div>
      </div >
    </div >
  );
}

export default ListingClient;
