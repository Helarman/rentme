

import getListings, {
    IListingsParams
} from "@/app/actions/getListings";
import ListingCard from "@/app/components/listings/ListingCard";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Filter from "@/app/components/filter/Filter";


interface CarsProps {
    searchParams: IListingsParams
};

const Cars = async ({ searchParams }: CarsProps) => {


    const listings = await getListings(searchParams);
    const currentUser = await getCurrentUser();



    return (
        <div className="w-full" >
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
                                Cars
                            </h1>

                            <p
                                className="
                                    mt-2 
                                    mb-4 
                                    text-xl 
                                    leading-relaxed 
                                    text-gray-500"
                            >
                                Select car and rent now!
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

                        <Filter />

                        <div className="lg:col-span-3">
                            <ul 
                                className="
                                    grid 
                                    gap-4 
                                    sm:grid-cols-2 
                                    lg:grid-cols-3"
                            >
                                {listings.map((listing: any) => (
                                    <li key={listing.id}>
                                        <ListingCard
                                            currentUser={currentUser}
                                            data={listing}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cars;