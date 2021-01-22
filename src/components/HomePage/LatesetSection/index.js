import React from "react";
import { ReadMoreLink, SectionContainer, SectionHeading } from "../styled";
import {
  LatestArticlesContainer,
  ArticleCard,
  Excerpt,
  Heading,
  TextContainer,
} from "./styled";

const LatestSection = ({ latestStories }) => {
  return (
    <SectionContainer>
      <SectionHeading>LATEST</SectionHeading>
      <LatestArticlesContainer>
        {latestStories.map(({ id, title, body }, index) => (
          <ArticleCard key={index}>
            <img
              src={`/images/latest_image${index + 1}.jpg`}
              alt="happy family"
            />
            <TextContainer>
              <Heading>{title}</Heading>
              <Excerpt>{body}</Excerpt>
              <ReadMoreLink to={`/news/${id}`}>READ MORE</ReadMoreLink>
            </TextContainer>
          </ArticleCard>
        ))}
      </LatestArticlesContainer>
    </SectionContainer>
  );
};

export default LatestSection;
