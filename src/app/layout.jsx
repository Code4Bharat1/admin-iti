import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';

export const metadata = {
  title: 'MAF ITI - Admin',
  description: 'Welcome to my application.',
  icons: {
    icon: '/favicon.ico',
  },
};


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
