
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import CarTable from "@/app/components/Tables/CarTable/CarTable";
import getListings, {
  IListingsParams
} from "@/app/actions/getListings";
import Header from "@/app/components/Tables/Header";
import { ListingType } from "@/app/types";

interface HomeProps {
  searchParams: IListingsParams
};

interface ListingProps {
  listings: Array<ListingType>
}

const ListingPage = async ({ searchParams }: HomeProps) => {

  const listings = await getListings(searchParams);

  const currentUser = await getCurrentUser();
  if (currentUser?.role === `ADMIN`) {

    return (
      <ClientOnly>
        <div className="container mx-auto">
          <Header title="List of Cars" button />
          <CarTable listings={listings as any} />
        </div>
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

export const dynamic = 'force-dynamic'
export default ListingPage;
