import './globals.css'
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from '@/components/pages/LandingPage/layout/Header';
import Footer from '@/components/pages/LandingPage/layout/Footer';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Future Flow Asean',
  description: 'Inflasi ASEAN adalah tantangan',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={montserrat.className}>
        <div className="overflow-x-hidden">
          <Header/>
            {children}
          <Footer/> 
        </div>
      </body>
    </html>
  );
}
