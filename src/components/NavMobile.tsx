import React from "react";
import { RxCross2 } from "react-icons/rx";
import {
  FaPeopleGroup,
  FaNewspaper,
  FaUser,
  FaStar,
  FaMoneyCheckDollar,
  FaQuestion,
  FaGithub,
  FaFacebook,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setShowNav } from "../store/slices/navMobileSlice";

function NavMobile() {
  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(setShowNav(false));
  };

  return (
    <nav>
      <div className="nav-mobile">
        <button className="nav-mobile__close-btn" onClick={handleCloseClick}>
          <RxCross2 />
        </button>
        <ul className="nav-mobile__list">
          <li className="nav-mobile__item">
            <button className="nav-mobile__btn">
              <FaNewspaper className="nav-mobile__icon" />
              <p className="nav-mobile__description">What's New?</p>
            </button>
          </li>
          <li className="nav-mobile__item">
            <button className="nav-mobile__btn">
              <FaPeopleGroup className="nav-mobile__icon" />
              <p className="nav-mobile__description">Classes</p>
            </button>
          </li>
          <li className="nav-mobile__item">
            <button className="nav-mobile__btn">
              <FaUser className="nav-mobile__icon" />
              <p className="nav-mobile__description">Membership</p>
            </button>
          </li>
          <li className="nav-mobile__item">
            <button className="nav-mobile__btn">
              <FaStar className="nav-mobile__icon" />
              <p className="nav-mobile__description">Personal Trainer</p>
            </button>
          </li>
          <li className="nav-mobile__item">
            <button className="nav-mobile__btn">
              <FaMoneyCheckDollar className="nav-mobile__icon" />
              <p className="nav-mobile__description">Promo for Juniors</p>
            </button>
          </li>
          <li className="nav-mobile__item">
            <button className="nav-mobile__btn">
              <FaQuestion className="nav-mobile__icon" />
              <p className="nav-mobile__description">FAQ</p>
            </button>
          </li>
        </ul>
        <div className="nav-mobile__media-box">
          <a href="https://www.facebook.com/">
            <FaFacebook className="nav-mobile__media-icon" />
          </a>
          <a href="https://twitter.com/">
            <FaXTwitter className="nav-mobile__media-icon" />
          </a>
          <a href="https://www.youtube.com/">
            <FaYoutube className="nav-mobile__media-icon" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram className="nav-mobile__media-icon" />
          </a>
          <a href="https://www.tiktok.com/">
            <FaTiktok className="nav-mobile__media-icon" />
          </a>
          <a href="https://www.tiktok.com/">
            <FaGithub className="nav-mobile__media-icon" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavMobile;
