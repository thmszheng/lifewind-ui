import React from "react";
import { SectionContainer, SectionHeading, ReadMoreLink } from "../styled";
import {
  FeaturedArticleContainer,
  ArticleImageWrapper,
  TextContainer,
  Heading,
  Excerpt,
} from "./styled";

const FeaturedSection = ({ featuredStory: { id, title, body } }) => {
  return (
    <SectionContainer bg="light">
      <SectionHeading>FEATURED</SectionHeading>
      <FeaturedArticleContainer>
        <ArticleImageWrapper>
          <img src="/images/featured_image.jpg" alt="happy family" />
        </ArticleImageWrapper>
        <TextContainer>
          <Heading>{title}</Heading>
          <Excerpt>{body}</Excerpt>
          <ReadMoreLink to={`/news/${id}`}>READ MORE</ReadMoreLink>
        </TextContainer>
      </FeaturedArticleContainer>
    </SectionContainer>
  );
};

export default FeaturedSection;
