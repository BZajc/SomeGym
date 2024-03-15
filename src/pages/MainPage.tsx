
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
        <ImagesSlider />
        <Offer />
        {/* <Partnership /> */}
        <PersonalTrainer />
      </div>
    );
  }

export default MainPage;
