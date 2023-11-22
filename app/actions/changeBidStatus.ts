'use server'

import prisma from "@/app/libs/prismadb";
import toast from "react-hot-toast";

export default async function changeBidStatus(
    id: string,
    newStatus: string
) {
    try {
        const reservation = await prisma.reservation.update({
            where: {
                id: id,
            },
            data: {
                status: newStatus
            },
        });
        if (!reservation) {
            return null;
        }
        return {
            ...reservation,
        };

    } catch (error: any) {
        throw new Error(error);
        toast.error('Error!');
    }

}
