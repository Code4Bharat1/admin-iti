'use client';

import { usePathname } from 'next/navigation';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Show navbar only on specific admin pages
  const showNavbarRoutes = ['/admindashboard', '/adminnotice'];
  const shouldShowNavbar = showNavbarRoutes.includes(pathname);

  // Hide footer on all admin pages
  const isAdminRoute = pathname.startsWith('/admin');
  const shouldShowFooter = !isAdminRoute;

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {shouldShowNavbar && <Navbar />}
        {children}
        {shouldShowFooter && <Footer />}
      </body>
    </html>
  );
}
