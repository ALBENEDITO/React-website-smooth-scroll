import React from 'react'
import {
  HeroContainer,
  Img,
  HeroContent,
} from './HeroElements'
import LogoCenter from '../../images/logo.png'

const HeroSection = () => {

  return (
    <HeroContainer id="home">
      <HeroContent>
           <Img src={LogoCenter} alt="" />
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
