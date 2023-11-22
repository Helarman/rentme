import { Roboto } from 'next/font/google'


import ToasterProvider from '@/app/providers/ToasterProvider';

import '../../global.css'
import ClientOnly from '../../components/ClientOnly';
import Sidebar from '@/app/components/navigation/sidebar/Sidebar';

import getCurrentUser from '@/app/actions/getCurrentUser';
import DeleteCarModal from '@/app/components/modals/DeleteCarModal';
import RentModal from '@/app/components/modals/RentModal';
import Footer from '@/app/components/footer/Footer';

export const metadata = {
  title: 'Rentme',
  description: 'Car rent app',
}

const font = Roboto({
  subsets: ['latin'],
  weight: '400'
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <div className='bg-gray-100'>
      <RentModal />
      <DeleteCarModal />
      <Sidebar currentUser={currentUser} />
      <div
        className="
          relative
          md:ml-64 
          
          
        "
      >
        <div
          className="
            px-4
            md:px-6
            mx-auto 
            w-full 
            
          "
        >
          <div
            className="
              flex 
              flex-wrap 
            "
          >
            <div className="w-full ">
              <div
                className="
                  relative 
                  flex 
                  flex-col 
                  min-w-0 
                  break-words 
                  w-full
                  bg-white 
                  text-gray-700 
                  shadow-md
                  min-h-screen
                "
              >
                <div className='mb-auto'>
                  {children}
                </div>
                <div >
                  <Footer admin />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div >
    </div>
  )
}
