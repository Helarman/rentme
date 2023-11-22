import { Roboto } from 'next/font/google'

import Navbar from '@/app/components/navigation/navbar/Navbar';

import ToasterProvider from '@/app/providers/ToasterProvider';

import '@/app/global.css'
import getCurrentUser from '@/app/actions/getCurrentUser';
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
    <div>
      <Navbar currentUser={currentUser} />
      <div >
    
        {children}
      </div>
      <Footer />
    </div>
  )
}
