'use client'

import CarItem from "./CarItem"
import { SafeUser, ListingType } from "@/app/types";



interface CarTableProps {
    listings: Array<ListingType>
}

const CarTable: React.FC<CarTableProps> = ({ listings }) => {
    return (
        <>
            <div >
                <div>
                    <div className="mt-8">
                        <ul className="space-y-4">
                            {listings && listings.map(({ id, title, category, imageSrc, description, doorsCount, seatsCount, bagsCount, powerCount, engineType, gearboxCount, gearboxType, drivetrainType, fuelCount, tankCount }) => (
                                <CarItem key={id} id={id} title={title} category={category} imageSrc={imageSrc} description={description} doorsCount={doorsCount} seatsCount={seatsCount} bagsCount={bagsCount} powerCount={powerCount} engineType={engineType} gearboxCount={gearboxCount} gearboxType={gearboxType} drivetrainType={drivetrainType} fuelCount={fuelCount} tankCount={tankCount} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarTable;