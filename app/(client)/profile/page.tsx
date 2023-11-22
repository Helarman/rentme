import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import ProfileClient from "./ProfileClient";
import getReservations from "@/app/actions/getReservations";
import getFavoriteListings from "@/app/actions/getFavoriteListings";


const ProfilePage = async () => {

  const currentUser = await getCurrentUser();
  const reservations = await getReservations({ userId: currentUser?.id });
  const favorites = await getFavoriteListings();
  
  return (
    <ClientOnly>
      <ProfileClient
        currentUser={currentUser}
        favorites={favorites}
        reservations={reservations}
      />
    </ClientOnly>
  );
}
 
export default ProfilePage;
