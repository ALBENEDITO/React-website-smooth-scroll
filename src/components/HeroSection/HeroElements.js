import styled from 'styled-components'
import ImgBg from "../../images/3.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${ImgBg});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 650px;
  position: relative;
  z-index: 1;

  /* Add :before styles */
  :before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
      linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
  }

`

export const Img = styled.img`
  width: 65%;
  height: 65%;
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`


