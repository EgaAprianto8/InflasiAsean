import About from "@/components/pages/LandingPage/About";
import Contact from "@/components/pages/LandingPage/Contact";
import Hero from "@/components/pages/LandingPage/Hero";
import Service from "@/components/pages/LandingPage/Service";
import Footer from "@/components/pages/LandingPage/layout/Footer";
import Header from "@/components/pages/LandingPage/layout/Header";
import Image from "next/image";

export default function Home() {
  return (      <>      
    <Hero 
          heading='"Dalam era teknologi yang terus berkembang, perlindungan data sensitif menjadi prioritas utama. Melalui aplikasi Steganografi AES-LSB, gabungan antara enkripsi AES dan penyembunyian pesan LSB, kami menjaga kerahasiaan data dengan kuat, meminimalkan risiko kebocoran informasi dalam dunia yang penuh dengan ancaman siber."' 
          message='~Steganografi Project'
    />
    <About/>
    <Service/>

    <Contact/>
</>
  );
}
