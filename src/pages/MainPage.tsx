import React from "react";
import Header from "../components/Header";
import NavMobile from "../components/NavMobile";
import ImagesSlider from "../components/ImagesSlider";
import { useSelector } from "react-redux";
import { selectShowNav } from "../store/slices/navMobileSlice";
import Offer from "../components/Offer";
import Partnership from "../components/Partnership";
import PersonalTrainer from "../components/PersonalTrainer";

function MainPage() {
  const showNav = useSelector(selectShowNav);
  return (
    <div className="main-page">
      {showNav && <NavMobile />}
      <Header />
      <ImagesSlider />
      <Offer />
      <Partnership />
      <PersonalTrainer />
    </div>
  );
}

export default MainPage;
