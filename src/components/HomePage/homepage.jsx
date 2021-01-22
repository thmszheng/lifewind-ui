import React, { useEffect } from "react";
import HeroImage from "./HeroImage";
import FeaturedSection from "./FeaturedSection";
import LatestSection from "./LatesetSection";
import Footer from "../Footer";

const HomePage = ({ newsStories = [], getNewsStoriesAction }) => {
  let featuredStory = newsStories.find(({ isFeatured }) => isFeatured) || {};
  let latestStories = newsStories.slice(0, 4);

  useEffect(() => {
    getNewsStoriesAction();
  }, []);

  return (
    <>
      <HeroImage />
      <FeaturedSection featuredStory={featuredStory} />
      <LatestSection latestStories={latestStories} />
      <Footer />
    </>
  );
};

export default HomePage;
