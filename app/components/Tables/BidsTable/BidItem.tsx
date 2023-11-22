"use client"

import { useRouter } from 'next/navigation';
import { useMemo } from "react";

import { format } from 'date-fns';
import toast from "react-hot-toast";

import { AiOutlineEye, AiOutlinePlayCircle, AiOutlineStop, AiOutlineCloseCircle } from 'react-icons/ai'

import Badge from '../../badges/Badge';
import changeBidStatus from '@/app/actions/changeBidStatus'

interface BudItemProps {
    id: string;
    totalPrice?: number;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    listingId?: string;
    userId?: string;
    authorId?: string;
    status?: string;
    userEmail?: string;
    listingName?: string;
    listingImgSrc?: string;
}

type HandleChangeProps = string;

const CarItem: React.FC<BudItemProps> = ({
    id,
    userId,
    listingId,
    startDate,
    endDate,
    totalPrice,
    createdAt,
    status,
    userEmail,
    listingName,
    listingImgSrc
}) => {

    const router = useRouter();
    const reservationDate = useMemo(() => {
        if (!startDate) {
            return null;
        }

        const start = new Date(startDate);
        const end = new Date(endDate);

        return `${format(start, 'PP')} - ${format(end, 'PP')}`;
    }, [startDate, endDate]);

    const createdAtDate = useMemo(() => {
        if (!createdAt) {
            return null;
        }

        const created = new Date(createdAt);

        return format(created, 'PP');
    }, [createdAt]);

    const handleChange: React.FC<HandleChangeProps> = (id, newStatus) => {
        changeBidStatus(id, newStatus);
        toast.success(`Status changed to ${newStatus}`);
        router.refresh();
        return null;
    }


    return (
        <div>

            <li className="flex flex flex-col lg:flex-row text-center md:text-left items-center gap-4 border p-5">
                <img
                    src={listingImgSrc}
                    alt=""
                    className="h-16 rounded object-cover"
                />

                <div>
                    <h3 className="text-sm text-gray-900">{listingName}</h3>

                    <dl className="mt-0.5 space-y-px text-sm text-gray-600">
                        {userEmail}
                    </dl>
                    <dl className="mt-0.5 space-y-px text-sm text-gray-600">
                        {createdAtDate}
                    </dl>
                </div>
                <div className="inline ml-5">{reservationDate}</div>
                <div className="inline ml-5">
                    {status === 'created' && <Badge type='warning' title={`${status}`} />}
                    {status === 'processed' && <Badge type='primary' title={`${status}`} />}
                    {status === 'started' && <Badge type='success' title={`${status}`} />}
                    {status === 'finished' && <Badge type='secondary' title={`${status}`} />}
                    {status === 'canceled' && <Badge type='danger' title={`${status}`} />}
                </div>
                <div className="flex flex-1 items-center justify-end gap-2">
                    {status === 'created' && <button className="text-gray-600 transition hover:text-sky-700" onClick={(e: any) => handleChange(id, 'processed')}><AiOutlineEye className="h-7 w-7" /></button>}
                    {status === 'processed' && <button className="text-gray-600 transition hover:text-emerald-700" onClick={(e: any) => handleChange(id, 'started')}><AiOutlinePlayCircle className="h-7 w-7" /></button>}
                    {status === 'started' && <button className="text-gray-600 transition hover:text-black" onClick={(e: any) => handleChange(id, 'finished')}><AiOutlineStop className="h-7 w-7" /></button>}
                    {status != 'finished' && <button className="text-gray-600 transition hover:text-red-700" onClick={(e: any) => handleChange(id, 'canceled')}><AiOutlineCloseCircle className="h-7 w-7" /></button>}
                </div>
            </li>
        </div>
    )
};

export default CarItem;