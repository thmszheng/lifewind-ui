import React from "react";
import { SectionContainer, SectionHeading } from "../styled";
import {
  FeaturedArticleContainer,
  ArticleImageWrapper,
  TextContainer,
  Heading,
  Excerpt,
} from "./styled";
import Button from "../../Button";

const FeaturedSection = () => {
  return (
    <SectionContainer bg="light">
      <SectionHeading>FEATURED</SectionHeading>
      <FeaturedArticleContainer>
        <ArticleImageWrapper>
          <img src="/images/featured_image.jpg" alt="happy family" />
        </ArticleImageWrapper>
        <TextContainer>
          <Heading>Best Life Insurance Companies of 2021</Heading>
          <Excerpt>
            We evaluated dozens of companies, scoring each on elements such as
            financial strength, customer service, and cost. Read on to see which
            companies made our Best Life Insurance Companies of 2021.
          </Excerpt>
          <Button btnStyle="secondary">READ MORE</Button>
        </TextContainer>
      </FeaturedArticleContainer>
    </SectionContainer>
  );
};

export default FeaturedSection;
