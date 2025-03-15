import React from "react";
import Hero from "../components/Hero";
import Homecard from "../components/Homecard";
import Joblisting from "../components/Joblisting";
import Viewalljobsbtn from "../components/Viewalljobsbtn";

function HomePage() {
  return (
    <>
      
      <Hero
        title="Become Front-End a Developer"
        subtitle="Find the Dream job that fits your skills and needs"
      />
      <Homecard />
      <Joblisting isHome={true} />
      <Viewalljobsbtn />
    </>
  );
}

export default HomePage;
