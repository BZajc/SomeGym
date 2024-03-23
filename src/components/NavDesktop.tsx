import React from "react";
import {
  FaPeopleGroup,
  FaNewspaper,
  FaUser,
  FaStar,
  FaMoneyCheckDollar,
  FaQuestion,
//   FaGithub,
//   FaFacebook,
//   FaXTwitter,
//   FaYoutube,
//   FaInstagram,
//   FaTiktok,
  FaGrip,
} from "react-icons/fa6";

function NavDesktop() {
  return (
    <nav>
      <div className="nav-desktop">
        <ul className="nav-desktop__list">
          <li className="nav-desktop__item">
            <button className="nav-desktop__btn">
              <FaNewspaper className="nav-desktop__icon" />
              <p className="nav-desktop__description">What's New?</p>
            </button>
          </li>
          <li className="nav-desktop__item">
            <button className="nav-desktop__btn">
              <FaPeopleGroup className="nav-desktop__icon" />
              <p className="nav-desktop__description">Classes</p>
            </button>
          </li>
          <li className="nav-desktop__item">
            <button className="nav-desktop__btn">
              <FaUser className="nav-desktop__icon" />
              <p className="nav-desktop__description">Membership</p>
            </button>
          </li>
          <li className="nav-desktop__item">
            <button className="nav-desktop__btn">
              <FaStar className="nav-desktop__icon" />
              <p className="nav-desktop__description">Personal Trainer</p>
            </button>
          </li>
          <li className="nav-desktop__item">
            <button className="nav-desktop__btn">
              <FaMoneyCheckDollar className="nav-desktop__icon" />
              <p className="nav-desktop__description">Promo for Juniors</p>
            </button>
          </li>
          <li className="nav-desktop__item">
            <button className="nav-desktop__btn">
              <FaQuestion className="nav-desktop__icon" />
              <p className="nav-desktop__description">FAQ</p>
            </button>
          </li>
          <li className="nav-desktop__item">
            <button className="nav-desktop__btn">
              <FaGrip className="nav-desktop__icon" />
              <p className="nav-desktop__description">Socials</p>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavDesktop;
