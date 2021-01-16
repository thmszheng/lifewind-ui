import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 850px;
  background-image: url("/images/hero_image.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  
  display: flex;
  justify-content: end;
  
  @media screen and (max-width: 1200px) {
    height: 700px;
  }
  
  @media screen and (max-width: 1030px) {
    height: 650px;
  }
  
  @media screen and (max-width: 850px) {
    background-position: center;
    height: 600px;
  }
`;

export const Overlay = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  z-index: 2;
  
  @media screen and (max-width: 850px) {
    display: initial;
  }
`;

export const HeroBody = styled.div`
  position: relative;
  z-index: 3;
  
  width: 40%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding: 40px;
`;

export const TextContainer = styled.div`
  height: 400px;
`;

export const Heading = styled.h1`
  font-family: "Trebuchet MS";
  font-size: 51px;
  color: #242736;
  
  margin-bottom: 30px;
  
  @media screen and (max-width: 1030px) {
    font-size: 45px;
  }
  
  @media screen and (max-width: 850px) {
    font-size: 35px;
    color: white;
  }
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  color: #404040;
  
  @media screen and (max-width: 1030px) {
    font-size: 15px;
  }
  
  @media screen and (max-width: 850px) {
    color: lightgrey;
  }
`;
