import { Roboto } from 'next/font/google'



import ToasterProvider from '@/app/providers/ToasterProvider';

import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';

import './global.css'
import getCurrentUser from './actions/getCurrentUser';

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
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        {children}
      </body>
    </html>
  )
}