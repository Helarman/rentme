'use client'
type: 'primary'
import Card, {CardType} from "@/app/components/cards/Card";
import { useRouter } from "next/navigation";
import { AiOutlineCar, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdCarRental } from "react-icons/md";

const Overview = () => {

  const Links = [
    { label: 'Home page', href: '/', description: 'desc', icon: AiOutlineHome, type: "primary" },
    { label: 'Cars', href: '/admin/cars', description: 'desc', icon: AiOutlineCar, type: "primary" },
    { label: 'Bids', href: '/admin/bids', description: 'desc', icon: MdCarRental, type: "primary" },
    { label: 'Users', href: '/admin/users', description: 'desc', icon: AiOutlineUser, type: "primary" },
  ]
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="container mx-auto pt-4">
        <div className="justify-between items-center flex flex-wrap -mx-4">
          {Links && Links.map(({ label, href, icon, description, type }) => (
            <div onClick={() => router.push(href)} key={label}
              className=" px-4 py-4 relative  w-full lg:w-3/12 w-full md:w-6/12 hover:opacity-75">

              <Card label={label} icon={icon} description={description} cardType={type as CardType} />
            </div>
          ))}

        </div>
      </div>
    </div>

  )
}
export default Overview;