'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from 'date-fns';
import { GiCarDoor, GiRollingSuitcase, GiCarSeat } from 'react-icons/gi'
import { FaMoneyBillWave } from 'react-icons/fa'

import {
  SafeListing,
  SafeReservation,
  SafeUser
} from "@/app/types";

import HeartButton from "../buttons/HeartButton";
import Button from "../buttons/Button";
import ClientOnly from "../ClientOnly";
import Badge from "../badges/Badge";

interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
  short?: boolean
};

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = '',
  currentUser,
  short
}) => {
  const router = useRouter();

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId)
    }, [disabled, onAction, actionId]);

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, 'PP')} - ${format(end, 'PP')}`;
  }, [reservation]);

  return (

    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="
        relative
        group 
        overflow-hidden 
        flex 
        flex-col 
        min-w-0 
        break-words 
        bg-white 
        w-full 
        mb-6 
        shadow-lg 
        rounded-lg"
    >
      <img
        alt={data.title}
        src={data.imageSrc}
        className="
          w-full 
          group-hover:scale-110 
          transition"
      />

      <div
        className="
          absolute 
          top-3 
          right-3"
      >
        <HeartButton
          listingId={data.id}
          currentUser={currentUser}
        />
      </div>

      <div
        className="
          px-6
          py-6 
          flex-auto"
      >
        <h6
          className="
            text-sm 
            font-bold 
            uppercase 
            mt-0 
            mb-1 
            text-blue-500"
        >
          {data.category}
        </h6>

        <h5
          className="
            text-2xl
            text-gray-700 
            font-semibold 
            mt-0 
            mb-2"
        >
          {data.title}
        </h5>

        <p
          className="
            text-gray-500 
            leading-relaxed"
        >
          {reservationDate}
        </p>

        {!short &&
          <>
            <p
              className="
                text-gray-500 
                leading-relaxed"
            >
              {reservation && reservation.status === 'created' && <Badge type='warning' title={`${reservation.status}`} wIcon={false} />}
              {reservation && reservation.status === 'processed' && <Badge type='primary' title={`${reservation.status}`} wIcon={false} />}
              {reservation && reservation.status === 'started' && <Badge type='success' title={`${reservation.status}`} wIcon={false} />}
              {reservation && reservation.status === 'finished' && <Badge type='secondary' title={`${reservation.status}`} wIcon={false} />}
              {reservation && reservation.status === 'canceled' && <Badge type='danger' title={`${reservation.status}`} wIcon={false} />}
            </p>

            <div
              className="
                flex 
                justify-between 
                mt-2"
            >
              <p className="mt-1">
                <span
                  className="
                    text-xl 
                    font-semibold 
                    text-blue-500"
                >
                  €{data.price}
                </span>

                <span
                  className="
                    text-sm 
                    text-gray-700"
                >
                  /day
                </span>
              </p>
            </div>
          </>
        }
        <div
          className="
            flex 
            justify-between 
            mt-2"
        >
          <span
            className="
              text-xl 
              font-semibold 
              text-blue-500
              mt-1
              mb-4"
          >
            {reservation && `€${reservation?.totalPrice}`}
          </span>
        </div>

        {onAction && actionLabel && (
          <Button
            type='primary'
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </div>

  );
}

export default ListingCard;