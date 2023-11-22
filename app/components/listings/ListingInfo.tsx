'use client';

import dynamic from "next/dynamic";
import { IconType } from "react-icons";

import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import ListingProperty from "./ListingProperty";


interface ListingInfoProps {
  title: string;
  user: SafeUser,
  description: string;
  seatsCount: number;
  bagsCount: number;
  powerCount: number
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  title,
  description,
  seatsCount,
  bagsCount,
  powerCount
}) => {

  return (
    <div
      className="
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
        <ListingProperty property={`${bagsCount}`} label={'name property'}/>
        <ListingProperty property={`${bagsCount}`} label={'name property'}/>
        <ListingProperty property={`${bagsCount}`} label={'name property'}/>
        <ListingProperty property={`${bagsCount}`} label={'name property'}/>
        <ListingProperty property={`${bagsCount}`} label={'name property'}/>
      </div>
    </div>
  );
}

export default ListingInfo;