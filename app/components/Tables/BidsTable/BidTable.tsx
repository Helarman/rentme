`use client`

import BidItem from "./BidItem"
import { HTMLInputTypeAttribute } from "react";
import { SafeUser, ListingType } from "@/app/types";


interface BidProps {
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
    type?: HTMLInputTypeAttribute ;
}
interface BidTableProps {
    reservations: Array<BidProps>;
}

const CarTable: React.FC<BidTableProps> = ({reservations}) => {
    return (
        <>
            <div >
                <div>
                    <div className="mt-8">
                        <ul className="space-y-4">
                            {reservations && reservations.map(({  id, userId, listingId, startDate, endDate, totalPrice, createdAt, status, userEmail, listingName, listingImgSrc}) => (
                                <BidItem key={id} id={id} userId={userId} listingId={listingId} startDate={startDate} endDate={endDate} totalPrice={totalPrice} createdAt={createdAt} status={status} userEmail={userEmail} listingName={listingName} listingImgSrc={listingImgSrc}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarTable;