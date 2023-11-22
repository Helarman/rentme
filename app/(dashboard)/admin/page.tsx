
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListings";

import Overview from './Overview'

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (currentUser?.role === `ADMIN`) {
    return (
      <ClientOnly>
        <Overview
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>

      <EmptyState
        title="You are not an administrator"
        subtitle="Sign in or stop cheating"
      />
    </ClientOnly>
  );

}

export default ListingPage;
