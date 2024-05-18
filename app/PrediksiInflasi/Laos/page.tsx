import Contact from '@/components/pages/LandingPage/Contact'
import Header from '@/components/pages/LandingPage/layout/Header'
import HeroSectionPI from '@/components/pages/PrediksiInflasi/HeroSectionPI'
import Information from '@/components/pages/PrediksiInflasi/Information'
import Pengenalan from '@/components/pages/PrediksiInflasi/Pengenalan'
import AseanModal from '@/components/pages/PrediksiInflasi/TermsModal'
import FooterPI from '@/components/pages/PrediksiInflasi/layout/FooterPI'
import PengenalanLaos from '@/components/pages/PrediksiInflasi/negara/Pengenalan/PengenalanLaos'
import Laos from '@/components/pages/PrediksiInflasi/negara/grafik/laos'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSectionPI/>
      <PengenalanLaos/>
      <AseanModal/>
      <Laos/>
      <Information/>
      <Contact/>
    </div>
  )
}

export default page
