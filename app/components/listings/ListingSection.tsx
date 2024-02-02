import Container from "../Container";
import HeartButton from "../buttons/HeartButton";
import ListingCard from "./ListingCard";


const ListingSection = ({ listings, currentUser }) => {

    const promotedListings = listings.filter(function (listingfilter) {
        return listingfilter.onHomepage;
    });

    return (


        <div className="w-full">
            <section className="relative py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-12 flex flex-wrap -mx-4 justify-start">
                        <div className="px-4 relative w-full lg:w-8/12 text-left">
                            <h3 className="text-3xl font-bold mt-3 mb-1 text-gray-700">Some of our cars</h3>
                            <p className="mt-2 mb-4 text-xl leading-relaxed text-gray-500">Interesting, but better watch everything</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">

                        {promotedListings && promotedListings.map((listing: any) => (
                            <div key={listing.id} className="px-4 relative w-full md:w-3/12">
                                <ListingCard
                                    currentUser={currentUser}

                                    data={listing}
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </section >
        </div >

    )
};

export default ListingSection;