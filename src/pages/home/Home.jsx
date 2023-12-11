import React from "react";
import Welcome from "../../components/welcome/Welcome";
import Popular from "../../components/popular/Popular";
import Offers from "../../components/offers/Offers";
import Newcollections from "../../components/newCollections/Newcollections";
import NewsLetter from "../../components/newsLetter/NewsLetter";

const Home = () => {
  return (
    <div className="home">
      <Welcome />
      <Popular />
      <Offers />
      <Newcollections />
      <NewsLetter />
    </div>
  );
};

export default Home;
