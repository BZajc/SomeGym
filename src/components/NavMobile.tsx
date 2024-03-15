import React from "react";
import { RxCross2 } from "react-icons/rx";
import {
  FaPeopleGroup,
  FaNewspaper,
  FaUser,
  FaStar,
  FaMoneyCheckDollar,
  FaQuestion,
  FaSquarePhone,
  FaSquareEnvelope,
  FaHouse,
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
    console.log("Close clicked!");
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
        <div className="nav-mobile__contact-box">
          <p className="nav-mobile__contact-info">
            We are here to help you! Feel free to contact us with any questions
            or support needs.
          </p>
          <div className="nav-mobile__contact-data-box">
            <a href="tel:+23 555 213 749" className="nav-mobile__contact-data">
              <FaSquarePhone /> +23 555 213 749
            </a>
            <a
              href="mailto:somegym@support.com"
              className="nav-mobile__contact-data"
            >
              <FaSquareEnvelope /> somegym@support.com
            </a>
            <p className="nav-mobile__contact-data">
              <FaHouse />
              Wonderland 23b
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavMobile;
