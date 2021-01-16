import styled from 'styled-components';


export const LatestArticlesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  @media screen and (max-width: 1300px) {
    flex-wrap: wrap;
  }
`;

export const ArticleCard = styled.div`
  position: relative;
  width: 23%;
  background-color: white;
  margin-bottom: 50px;
  
  & button {
    position: absolute;
    bottom: 5px;
  }
  
  & img {
    width: 100%;
    height: auto;
  }
  
  @media screen and (max-width: 1300px) {
    width: 48%;
  }
  
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  
  width: 100%;
  padding: 20px 20px 40px 20px;
`;

export const Heading = styled.h2`
  font-size: 20px;
  font-family: "Trebuchet MS";
  color: black;
  margin-bottom: 20px;
`;

export const Excerpt = styled.p`
  font-size: 16px;
  color: #404040;
  margin-bottom: 20px;
`;
