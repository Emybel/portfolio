import ActiveSectionContextProvider from '@/context/active-section-context';
import Header from '@/app/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Imane Belaid | Personal Portfolio',
  description: 'Imane is a Front-End developer with one year of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className}
      bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`
    }>
      
      <div className='bg-[#f1d1fc] absolute top-[-6rem] right-[11rem] h-[31.25rem] -z-10 w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
      <div className='bg-[#d1fce9] absolute top-[-1rem] -z-10 right-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
      <ActiveSectionContextProvider>
        <Header />
        {children}
        <Toaster position='bottom-right' />
        <Footer/>
      </ActiveSectionContextProvider>
      
      
      </body>
    </html>
  )
}
