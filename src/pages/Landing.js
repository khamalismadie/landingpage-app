import React from "react";

import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="Building an Integrated Digital Marketing"
        subtitle="Exploring new ways to increase your business brand and sales. 
        And can build relationships with customers through digital marketing."
        image="https://source.unsplash.com/collection/1201999/800x600"
        ctaText="Get Started"
        ctaLink="/signup"
      />
    </LandingLayout>
  );
}