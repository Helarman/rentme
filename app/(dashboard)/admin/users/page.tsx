
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getUsers from "@/app/actions/getUsers"
import Header from "@/app/components/Tables/Header";
import UserTable from "@/app/components/Tables/UserTable/UsersTable";

const ListingPage = async () => {

  const users = await getUsers();
  const currentUser = await getCurrentUser();

  if (currentUser?.role === `ADMIN`) {
    return (
      <ClientOnly> 
        <div className="container mx-auto">
          <Header title="List of Users" />
          <UserTable users={users as any} />
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
