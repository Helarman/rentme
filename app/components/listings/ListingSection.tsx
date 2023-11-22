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


        /*<Container>
            <div>
                <div className="mx-auto max-w-screen-xl py-8 sm:py-12">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            Select a car
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Some of our cars
                        </p>
                    </div>

                    <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {promotedListings && promotedListings.map((listing: any) => (
                        <ListingCard
                            currentUser={currentUser}
                            key={listing.id}
                            data={listing}
                        />
                    ))}
                    </ul>
                </div>
            </div>
        </Container>*/

    )
};

export default ListingSection;