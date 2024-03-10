import React, { useState, useEffect, useMemo } from "react";
import logo from "../img/someGymLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { setShowNav } from "../store/slices/navMobileSlice";

function Header() {
  const dispatch = useDispatch();

  const handleNavClick = () => {
    console.log("Burger Icon clicked, navigation will open");
    dispatch(setShowNav(true));
  };

  const headerSubtitles = useMemo(
    () => [
      "Let's get stronger together! Welcome to your new fitness destination!",
      "Get ready to turn your fitness dreams into reality!",
      "Where your journey to the perfect body begins!",
      "Join our vibrant community and unlock your full potential!",
      "Discover more than just a workout - your ultimate wellness hub!",
      "Strength in unity - your home for achievements and support.",
      "Reach new heights in your fitness journey with us by your side!",
      "Unlock your full potential - your guide to physical and mental fitness.",
      "Challenge yourself and grow with us - where fitness knows no limits!",
      "Embrace diversity and excellence - your partner in achieving physical greatness!",
    ],
    []
  );

  // Change subtitles from an headerSubtitles array every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * headerSubtitles.length);
      setHeaderSubtitle(headerSubtitles[randomIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, [headerSubtitles]);

  // Set a random subtitle on component mounting
  const [headerSubtitle, setHeaderSubtitle] = useState<string>(() => {
    const randomIndex = Math.floor(Math.random() * headerSubtitles.length);
    return headerSubtitles[randomIndex];
  });

  return (
    <header>
      <div className="header">
        <div className="header__background"></div>
        <div className="header__background-overlay">
          <div className="header__top-box">
            <img
              className="header__logo"
              src={logo}
              alt="logo of the company"
            />
            <button className="header__burger-btn" onClick={handleNavClick}>
              <RxHamburgerMenu />
            </button>
          </div>
          <div className="header__text-box">
            <h1 className="header__text">Welcome in SomeGym</h1>
            <p className="header__text">{headerSubtitle}</p>
          </div>
          <div className="header__shortcuts">
            <button className="header__shortcut-btn">Membership</button>
            <button className="header__shortcut-btn">Trainer</button>
            <button className="header__shortcut-btn">Pricing</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
