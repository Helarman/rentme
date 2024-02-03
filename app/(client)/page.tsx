import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";
import HeaderSection from "@/app/components/header/HeaderSection";

import getListings, { 
  IListingsParams
} from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import Features from "../components/features/Features";
import Steps from "../components/steps/StepsSection";
import Listing from "../components/listings/ListingSection";
import Footer from "../components/footer/Footer";
import TestimonalsSection from "../components/testimonals/TestimonalsSection";

interface HomeProps {
  searchParams: IListingsParams
};

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();
  
  return (
    <>
      <HeaderSection/>
      <Features/>
      <Listing listings={listings} currentUser={currentUser}/>
      <Steps/>
      <TestimonalsSection/>
    </>
  )
}

export const dynamic = 'force-dynamic'
export default Home;
