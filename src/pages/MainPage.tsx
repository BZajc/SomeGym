import React, { useEffect } from "react";
import Header from "../components/Header";
import NavMobile from "../components/NavMobile";
import ImagesSlider from "../components/ImagesSlider";
import { useSelector } from "react-redux";
import { selectShowNav } from "../store/slices/navMobileSlice";
import Offer from "../components/Offer";
// import Partnership from "../components/Partnership";
import PersonalTrainer from "../components/PersonalTrainer";
import ProgressBar from "../components/ProgressBar";
import GeneralInfo from "../components/GeneralInfo";
import Reviews from "../components/Reviews";

function MainPage() {
  const showNav = useSelector(selectShowNav);

  // Remove scroll when nav is open
  useEffect(() => {
    if (showNav) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [showNav]);

  return (
    <div className="main-page">
      {showNav && <NavMobile />}
      <ProgressBar />
      <Header />
      <main>
        <ImagesSlider />
        <Offer />
        {/* <Partnership /> */}
        <PersonalTrainer />
        <GeneralInfo />
        <Reviews />
      </main>
    </div>
  );
}

export default MainPage;
