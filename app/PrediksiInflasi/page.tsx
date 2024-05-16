import Contact from '@/components/pages/LandingPage/Contact'
import Header from '@/components/pages/LandingPage/layout/Header'
import HeroSectionPI from '@/components/pages/PrediksiInflasi/HeroSectionPI'
import Information from '@/components/pages/PrediksiInflasi/Information'
import Pengenalan from '@/components/pages/PrediksiInflasi/Pengenalan'
import FooterPI from '@/components/pages/PrediksiInflasi/layout/FooterPI'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSectionPI/>
      <Pengenalan/>
      <Information/>
      <Contact/>
    </div>
  )
}

export default page