import React from "react";
import {
  HeroContainer,
  Overlay,
  HeroBody,
  TextContainer,
  Heading,
  Subtitle,
} from "./styled";

const HeroImage = () => {
  return (
    <HeroContainer>
      <Overlay />
      <HeroBody>
        <TextContainer>
          <Heading>PLAN FOR THE FUTURE, LIVE FOR THE MOMENT</Heading>
          <Subtitle>
            Read and share knowledge about life insurance from independent
            voices and experts around the globe.
          </Subtitle>
        </TextContainer>
      </HeroBody>
    </HeroContainer>
  );
};

export default HeroImage;
