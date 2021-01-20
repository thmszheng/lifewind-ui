import React from "react";
import HeroImage from "./HeroImage";
import FeaturedSection from "./FeaturedSection";
import LatestSection from "./LatesetSection";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <>
      <HeroImage />
      <FeaturedSection />
      <LatestSection />
      <Footer />
    </>
  );
};

export default HomePage;
