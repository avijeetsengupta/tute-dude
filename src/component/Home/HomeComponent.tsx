import React from "react";
import CardComponent from "./cardSlider/CardComponent";
import ReferalComponent from "./referralSection/ReferralComponent";
import "./style.scss";
import TitleComponent from "./titleSection/TitleComponent";

const HomeComponent = () => {
  return (
    <div className="home">
      <TitleComponent />
      <ReferalComponent />
      <CardComponent />
    </div>
  );
};

export default HomeComponent;
