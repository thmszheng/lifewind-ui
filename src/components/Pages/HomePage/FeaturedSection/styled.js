import styled from 'styled-components';

export const FeaturedArticleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  
  @media screen and (max-width: 1140px) {
    flex-wrap: wrap;
  }
`;

export const ArticleImageWrapper = styled.div`
  width: 50%;
  height: auto;
  flex-shrink: 0.1;
  
  & img {
    width: 100%;
    height: auto;
  }
  
  @media screen and (max-width: 1140px) {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  
  width: 50%;
  padding: 0 50px 0 70px;
  
  @media screen and (max-width: 1140px) {
    align-items: flex-start;
    width: 100%;
    padding: 25px 10px 0 10px;
  }
`;

export const Heading = styled.h2`
  font-size: 35px;
  font-family: "Trebuchet MS";
  color: black;
  margin-bottom: 20px;
  
  @media screen and (max-width: 1140px) {
    font-size: 30px;
  }
`;

export const Excerpt = styled.p`
  max-width: 650px;
  font-size: 22px;
  color: #404040;
  margin-bottom: 20px;
  
  @media screen and (max-width: 1140px) {
   max-width: none;
  }
`;
