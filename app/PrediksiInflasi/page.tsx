import Contact from '@/components/pages/LandingPage/Contact'
import HeroSectionPI from '@/components/pages/PrediksiInflasi/HeroSectionPI'
import Information from '@/components/pages/PrediksiInflasi/Information'
import Pengenalan from '@/components/pages/PrediksiInflasi/Pengenalan'
import AseanModal from '@/components/pages/PrediksiInflasi/TermsModal'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSectionPI/>
      <Pengenalan/>
      <AseanModal/>
      <Information/>
      <Contact/>
    </div>
  )
}

export default page
