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
          heading='"Inflasi yang tidak terkendali dapat merusak stabilitas ekonomi dan meningkatkan biaya hidup di negara-negara ASEAN. FutureFlow ASEAN menggunakan metode Secant untuk memprediksi inflasi 2025, membantu pemegang kebijakan dan pelaku ekonomi mengelola dampak inflasi lebih efektif."' 
          message='~FutureFlow ASEAN'
    />
    <About/>
    <Service/>

    <Contact/>
</>
  );
}
