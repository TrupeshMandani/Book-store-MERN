/**
 * The Home component renders the Banner, TopSellers, Recommended, and News components in a React
 * application.
 * @returns The Home component is being returned, which includes the Banner, TopSellers, Recommended,
 * and News components rendered in sequence.
 */
import React from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
import Recommended from "./Recommended";
import News from "./News";

const Home = () => {
  return (
    <>
      <Banner />
      <TopSellers />
      <Recommended />
      <News />
    </>
  );
};

export default Home;
