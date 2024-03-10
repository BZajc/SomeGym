import React from "react";
import { RxCross2, RxChevronRight, RxChevronLeft } from "react-icons/rx";
import {
  FaPeopleGroup,
  FaNewspaper,
  FaUser,
  FaStar,
  FaMoneyCheckDollar,
  FaQuestion,
  FaSquarePhone,
  FaSquareEnvelope,
  FaFacebook,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";
import { useDispatch} from "react-redux";
import { setShowNav} from "../store/slices/navMobileSlice";

function NavMobile() {
  const dispatch = useDispatch()

  const handleCloseClick = () => {
    dispatch(setShowNav(false))
    console.log("Close clicked!");
  }

  return (
    <nav>
      <div className="nav-mobile">
        <button className="nav-mobile__close-btn" onClick={handleCloseClick}>
          <RxCross2 />
        </button>
        <div className="nav-mobile__info-box">
          <h3 className="nav-mobile__info-topic">What's New?</h3>
          <p className="nav-mobile__info-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            dolorum laboriosam beatae reiciendis velit suscipit!
          </p>
          <button className="nav-mobile__info-btn">
            <RxChevronLeft className="nav-mobile__info-btn-chevron" />
            Learn More{" "}
            <RxChevronRight className="nav-mobile__info-btn-chevron" />
          </button>
        </div>
        <div className="nav-mobile__icons">
          <button className="nav-mobile__icon-box">
            <FaNewspaper className="nav-mobile__icon" />
            <p className="nav-mobile__icon-description">What's New?</p>
          </button>
          <button className="nav-mobile__icon-box">
            <FaPeopleGroup className="nav-mobile__icon" />
            <p className="nav-mobile__icon-description">Classes</p>
          </button>
          <button className="nav-mobile__icon-box">
            <FaUser className="nav-mobile__icon" />
            <p className="nav-mobile__icon-description">Membership</p>
          </button>
          <button className="nav-mobile__icon-box">
            <FaStar className="nav-mobile__icon" />
            <p className="nav-mobile__icon-description">Personal Trainer</p>
          </button>
          <button className="nav-mobile__icon-box">
            <FaMoneyCheckDollar className="nav-mobile__icon" />
            <p className="nav-mobile__icon-description">Promo for Juniors</p>
          </button>
          <button className="nav-mobile__icon-box">
            <FaQuestion className="nav-mobile__icon" />
            <p className="nav-mobile__icon-description">FAQ</p>
          </button>
        </div>
        <div className="nav-mobile__contact-box">
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
            <p className="nav-mobile__contact-data">Wonderland 23b</p>
          </div>
          <p className="nav-mobile__contact-info">
            We are here to help you! Feel free to contact us with any questions
            or support needs.
          </p>
        </div>
        <div className="nav-mobile__socials-box">
          <button className="nav-mobile__social-icon">
            <FaFacebook />
          </button>
          <button className="nav-mobile__social-icon">
            <FaXTwitter />
          </button>
          <button className="nav-mobile__social-icon">
            <FaYoutube />
          </button>
          <button className="nav-mobile__social-icon">
            <FaInstagram />
          </button>
          <button className="nav-mobile__social-icon">
            <FaTiktok />
          </button>
        </div>

        <p className="nav-mobile__visual-info">
          Links for socials are only for a visual purposes
        </p>
      </div>
    </nav>
  );
}

export default NavMobile;
