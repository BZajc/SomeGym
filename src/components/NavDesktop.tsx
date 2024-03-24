import React from "react";
import {
  FaPeopleGroup,
  FaNewspaper,
  FaUser,
  FaStar,
  FaMoneyCheckDollar,
  FaQuestion,
  FaGrip,
} from "react-icons/fa6";
import NavDesktopMedia from "./NavDesktopMedia";
import { useDispatch, useSelector } from "react-redux";
import { selectShowNav } from "../store/slices/navDesktopSlice";

function NavDesktop() {
  const dispatch = useDispatch();
  const mediaOpen = useSelector(selectShowNav)

  const handleMediaOpen = () => {
    dispatch({ type: "navDesktop/setShowNav", payload: !mediaOpen });
  }
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
          <li className="nav-desktop__item nav-desktop__item--media">
            <button className="nav-desktop__btn" onClick={handleMediaOpen}>
              <FaGrip className="nav-desktop__icon" />
              <p className="nav-desktop__description">Socials</p>
            </button>
            {mediaOpen && <NavDesktopMedia />}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavDesktop;
