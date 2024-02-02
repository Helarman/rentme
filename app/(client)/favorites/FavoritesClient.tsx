import { SafeListing, SafeUser } from "@/app/types";

import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";

interface FavoritesClientProps {
  listings: SafeListing[],
  currentUser?: SafeUser | null,
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser
}) => {
  return (
    <div className="w-full">
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
                Favorites
              </h1>

              <p
                className="
                  mt-2 
                  mb-4 
                  text-xl 
                  leading-relaxed 
                  text-gray-500"
              >
                All the cars are cool, but these are your favorites
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

            {listings.map((listing: any) => (
              <div key={listing.id}>
                <ListingCard
                  currentUser={currentUser}
                  data={listing}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoritesClient;