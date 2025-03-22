import React from 'react'
import AlpTopHead from '../AlpTophead/AlpTopHead'
import AlpNavbar from '../AlpNavbar/AlpNavbar'
import AlpBanner from '../AlpBanner/AlpBanner'
import AlpSubbanner from '../AlpSubbanner/AlpSubbanner'
import AlpBloosomserum from '../AlpBloosomserum/AlpBloosomserum'
import Alphq from '../AlpHQ/Alphq'
import AlpBennefits from '../AlpBennefits/AlpBennefits'
import AlpWhyus from '../AlpWhyus/AlpWhyus'
import AlpGarentee from '../AlpGarantee/AlpGarentee'
import AlpComparison from '../AlpComparison/AlpComparison'
import AlpFaq from '../AlpFaq/AlpFaq'
import AlpFooter from '../AlpFooter/AlpFooter'
import AlpTestinomials from '../AlpTestinomials/AlpTestinomials'
import AlpIngreediants from '../AlpIngreediants/AlpIngreediants'
import AlpCart from '../AlpCart/AlpCart'
import Alpvideotestinomial from '../AlpHearitfromothers/Alpvideotestinomial'

const Home = () => {
  return (
    <div className='Alp-Home'>
      <AlpTopHead/>
      <AlpNavbar/>
      <AlpBanner/>
      <AlpSubbanner/>
      <AlpTestinomials/>
      <AlpBloosomserum/>
      <AlpIngreediants/>
      <Alpvideotestinomial/>
      <Alphq/>
      <AlpWhyus/>
      <AlpBennefits/>
      <AlpCart/>
      <AlpGarentee/>
      <AlpComparison/>
      <AlpFaq/>
      <AlpFooter/>
    </div>
  )
}

export default Home
