import React, { useEffect } from "react";
import Header from "../components/Header";
import NavMobile from "../components/NavMobile";
import ImagesSlider from "../components/ImagesSlider";
import { useSelector } from "react-redux";
import { selectShowNav } from "../store/slices/navMobileSlice";
import Offer from "../components/Offer";
import PersonalTrainer from "../components/PersonalTrainer";
import ProgressBar from "../components/ProgressBar";
import GeneralInfo from "../components/GeneralInfo";
import Reviews from "../components/Reviews";
import Media from "../components/Media";
import Footer from "../components/Footer";
import NavDesktop from "../components/NavDesktop";

function MainPage() {
  const showNav = useSelector(selectShowNav);

  // Remove scroll when mobile nav is open
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
      <NavDesktop />
      <Header />
      <main>
        <ImagesSlider />
        <Offer />
        <PersonalTrainer />
        <GeneralInfo />
        <Reviews />
        <Media />
        <Footer />
      </main>
    </div>
  );
}

export default MainPage;
