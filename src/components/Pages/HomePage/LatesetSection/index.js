import React from 'react';
import {SectionContainer, SectionHeading} from "../styled";
import { LatestArticlesContainer, ArticleCard, Excerpt, Heading, TextContainer } from './styled';
import Button from "../../../Button";


const LatestSection = () => {
  return (
    <SectionContainer>
      <SectionHeading>
        LATEST
      </SectionHeading>
      <LatestArticlesContainer>
        <ArticleCard>
          <img src="/images/latest_image1.jpg" alt="happy family" />
          <TextContainer>
            <Heading>
              Life Insurance Offering More Incentive to Live Longer
            </Heading>
            <Excerpt>
              A couple in their mid-60s, bought life insurance four years ago to protect their lifestyle in retirement.
              Later, they upgraded to a program offered by the insurer to get healthier and more energized.
            </Excerpt>
            <Button>
              READ MORE
            </Button>
          </TextContainer>
        </ArticleCard>
        <ArticleCard>
          <img src="/images/latest_image2.jpg" alt="happy family" />
          <TextContainer>
            <Heading>
              Life Insurance From Your Employer Usually Isn’t Enough
            </Heading>
            <Excerpt>
              Life insurance from your employer is a valued benefit for millions of American workers.
              Employer life insurance is a form of group life insurance that’s offered to you and your coworkers.
            </Excerpt>
            <Button>
              READ MORE
            </Button>
          </TextContainer>
        </ArticleCard>
        <ArticleCard>
          <img src="/images/latest_image3.jpg" alt="happy family" />
          <TextContainer>
            <Heading>
              Ways Federal Life, Health and Annuity Legislation Could Evolve
            </Heading>
            <Excerpt>
              Congress operates more or less as it has in the past — insurers, financial professionals and industry groups will want to find a way to move back toward toward policymaking.
            </Excerpt>
            <Button>
              READ MORE
            </Button>
          </TextContainer>
        </ArticleCard>
        <ArticleCard>
          <img src="/images/latest_image4.jpg" alt="happy family" />
          <TextContainer>
            <Heading>
              10 Advantages of Hybrid Life Insurance with Long-Term Care
            </Heading>
            <Excerpt>
              Do you know about about hybrid life insurance? This coverage combines long-term care and life insurance into one policy. Like hybrid cars, these hybrid policies are increasingly popular.
            </Excerpt>
            <Button>
              READ MORE
            </Button>
          </TextContainer>
        </ArticleCard>
      </LatestArticlesContainer>
    </SectionContainer>
  )
};

export default LatestSection;
