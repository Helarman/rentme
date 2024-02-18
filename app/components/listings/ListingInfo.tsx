'use client';


import { SafeUser } from "@/app/types";
import { TbEngine, TbGasStation, TbManualGearbox, TbMap, TbBriefcase, TbUser } from "react-icons/tb";
import Avatar from "../Avatar";
import ListingProperty from "./ListingProperty";
import { PiGasCanLight, PiGearBold } from "react-icons/pi";
import { GiCarDoor } from "react-icons/gi";


interface ListingInfoProps {
  seatsCount: number;
  bagsCount: number;
  powerCount: number;
  fuelCount: number
  tankCount: number
  gearboxCount: number
  gearboxType: string;
  drivetrainType: string;
  engineType: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  seatsCount,
  bagsCount,
  powerCount,
  fuelCount,
  tankCount,
  gearboxCount,
  gearboxType,
  drivetrainType,
  engineType,
}) => {

  const distance: number = Math.ceil(tankCount / fuelCount)*100

  return (
    <div
      className="
        w-full
        mt-3
        md:mt-0
        bg-white 
        rounded-xl 
        border-[1px]
        border-neutral-200 
        overflow-hidden"
    >
      <div
        className="
          flex 
          flex-col
          gap-1
          p-4"
      >
        <div className="inline-flex items-center">
          <span
            className="
              text-2xl 
              text-gray-700
            "
          >
            <TbEngine />
          </span>

          <span
            className="
              ml-2
              text-2xl 
              font-semibold
              text-blue-500
            "
          >
            {powerCount}
          </span>

          <span
            className="
              self-end
              text-md 
              text-gray-700
            "
          >
            hp
          </span>
        </div>

        <div className="inline-flex items-center">
          <span
            className="
              text-2xl 
              text-gray-700
            "
          >
            <TbManualGearbox />
          </span>

          <span
            className="
              ml-2
              text-2xl 
              font-semibold
              text-blue-500
            "
          >
            {gearboxCount}
          </span>

          <span
            className="
              self-end
              text-md 
              text-gray-700
            "
          >
            {gearboxType}
          </span>

        </div>

        <div className="inline-flex items-center">
          <span
            className="
              text-2xl 
              text-gray-700
            "
          >
            <PiGearBold />
          </span>

          <span
            className="
              ml-2
              text-2xl 
              font-semibold
              text-blue-500
            "
          >
            {drivetrainType}
          </span>

        </div>

        <div className="inline-flex items-center">
          <span
            className="
              text-2xl 
              text-gray-700
            "
          >
            <TbGasStation />
          </span>

          <span
            className="
              ml-2
              text-2xl 
              font-semibold
              text-blue-500
            "
          >
            {fuelCount}
          </span>

          <span
            className="
              self-end
              text-md 
              text-gray-700
            "
          >
            l/100km
          </span>

          <span
            className="
              ml-2
              text-2xl 
              font-semibold
              text-gray-700
            "
          >

          </span>
        </div>

        <div className="inline-flex items-center">
          <span
            className="
              text-2xl 
              text-gray-700
            "
          >
            <TbMap />
          </span>

          <span
            className="
              ml-2
              text-2xl 
              font-semibold
              text-blue-500
            "
          >
            {distance}
          </span>

          <span
            className="
              self-end
              text-md 
              text-gray-700
            "
          >
            km
          </span>
        </div>

        <div className="inline-flex items-center">
          <span
            className="
              text-2xl 
              text-gray-700
            "
          >
            <TbBriefcase />
          </span>

          <span
            className="
              ml-2
              text-2xl 
              font-semibold
              text-blue-500
            "
          >
            {bagsCount}
          </span>

          <span
            className="
              ml-3
              text-2xl 
              text-gray-700
            "
          >
            <TbUser />
          </span>

          <span
            className="
              ml-2
              text-2xl 
              font-semibold
              text-blue-500
            "
          >
            {seatsCount}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ListingInfo;