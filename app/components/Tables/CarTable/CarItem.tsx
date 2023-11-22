"use client"

import { useRouter } from 'next/navigation';
import { AiFillDelete, AiFillEdit, AiOutlineEye } from 'react-icons/ai';
import {MdOutlineAirlineSeatReclineExtra} from "react-icons/md"
import {PiEngineFill, PiSuitcaseRollingFill, PiGasCanFill} from "react-icons/pi"
import {TbManualGearbox} from "react-icons/tb"
import {BsFillFuelPumpFill} from "react-icons/bs"
import {GiCarDoor} from "react-icons/gi"
import {RiPinDistanceFill} from "react-icons/ri"

import ListingDelete from '@/app/actions/deleteListingById';

import Badge from '@/app/components/badges/Badge';

interface CarItemProps {
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
    gearboxType: string;
    engineType: string;
    gearboxCount: number;
    drivetrainType: string;
    doorsCount: number
}

type ButtonHandlerProps = string;

type HandleDeleteProps = string;

const CarItem: React.FC<CarItemProps> = ({ id, title, category, imageSrc, description, seatsCount, bagsCount, powerCount, engineType, gearboxCount, gearboxType, drivetrainType, fuelCount, tankCount, doorsCount }) => {

    const router = useRouter();


    const buttonHandler: React.FC<ButtonHandlerProps> = (id) => {
        router.push(`/listings/${id}`)
        return null;
    }
    

    const handleDelete: React.FC<HandleDeleteProps> = (id) => {
        ListingDelete(id);
        return null;
    }

    const distanceByFuel = (tankCount/fuelCount)*100
    
    return (
        <div>

            <div className="flex flex-col lg:flex-row text-center md:text-left items-center gap-4 border p-5">
                <img
                    src={imageSrc}
                    alt=""
                    className="h-16 rounded object-cover"
                />

                <div>
                    <h3 className="text-sm text-gray-900">{title}</h3>

                     <div className="mt-0.5 space-y-px text-sm text-gray-600">
                        <div>
                             <div className="inline">{category}</ div>
                        </div>
                    </div>
                </div>
                <div>
                     <div className="lg:inline ml-5 mt-5"><Badge type='primary' outline title={`${powerCount} kW`} icon={PiEngineFill}/></ div>
                     <div className="lg:inline ml-5 mt-5"><Badge type='primary' outline title={`${gearboxCount}${gearboxType}`} icon={TbManualGearbox}/></ div>
                     <div className="lg:inline ml-5 mt-5"><Badge type='primary' outline title={`${drivetrainType}`} icon={TbManualGearbox}/></ div>
                     <div className="lg:inline ml-5 mt-5"><Badge type='primary' outline title={`${engineType}`} icon={BsFillFuelPumpFill}/></ div>
                     <div className="lg:inline ml-5 mt-5"><Badge type='primary' outline title={`${tankCount}`} icon={PiGasCanFill}/></ div>
                     <div className="lg:inline ml-5 mt-5"><Badge type='primary' outline title={`${fuelCount}`} icon={BsFillFuelPumpFill}/></ div>
                     <div className="lg:inline ml-5 mt-5"><Badge type='primary' outline title={`${distanceByFuel} km`} icon={RiPinDistanceFill}/></ div>
                     <div className="lg:inline ml-5 mt-5"><Badge type='primary' outline title={`${seatsCount}`} icon={MdOutlineAirlineSeatReclineExtra}/></ div>
                     <div className="lg:inline ml-5 mt-5"><Badge type='primary' outline title={`${bagsCount}`} icon={PiSuitcaseRollingFill}/></ div>
                     <div className="lg:inline ml-5 mt-5"><Badge type='primary' outline title={`${doorsCount}`} icon={GiCarDoor}/></ div>
                </div>
                <div className="flex flex-1 items-center justify-end gap-2">
                    
                    <button onClick={(e: any) => buttonHandler(id)} className="text-gray-600 transition hover:text-red-600">
                        <span className="sr-only">Go to item</span>

                        <AiOutlineEye className="h-5 w-5" />
                    </button>
                  
                    <button onClick={(e: any) => handleDelete(id)} className="text-gray-600 transition hover:text-red-600">
                        <span className="sr-only">Remove item</span>

                        <AiFillDelete className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default CarItem;