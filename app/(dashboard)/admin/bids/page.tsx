
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser"
import BidTable from "@/app/components/Tables/BidsTable/BidTable";
import getReservations from "@/app/actions/getReservations";
import Header from "@/app/components/Tables/Header";
import { Tab, Tabs } from "@/app/components/tabs/Tabs";

const ListingPage = async () => {


  const createdReservations = await getReservations({ status: 'created' });
  const processedReservations = await getReservations({ status: 'processed' });
  const startedReservations = await getReservations({ status: 'started' });
  const finishedReservations = await getReservations({ status: 'finished' });
  const canceledReservations = await getReservations({ status: 'canceled' });

  const currentUser = await getCurrentUser();
  if (currentUser?.role === `ADMIN`) {

    return (
      <ClientOnly>
         <div className="container mx-auto">
          <Header title="List of Bids" />
          <div>
            <Tabs>
              <Tab label="Created">
                <BidTable reservations={createdReservations as any} />
              </Tab>
              <Tab label="Processed">
                <BidTable reservations={processedReservations as any} />
              </Tab>
              <Tab label="Started">
                <BidTable reservations={startedReservations as any} />
              </Tab>
              <Tab label="Finished">
                <BidTable reservations={finishedReservations as any} />
              </Tab>
              <Tab label="Canceled">
                <BidTable reservations={canceledReservations as any} />
              </Tab>
            </Tabs>
          </div>
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

export default ListingPage;
