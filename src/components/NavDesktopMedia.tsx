import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

function NavDesktopMedia() {
  return (
    <ul className="nav-desktop__media-box">
      <li className="nav-desktop__media-item">
        <a href="https://www.facebook.com/" className="nav-desktop__media-btn">
          <FaFacebook className="nav-desktop__media-icon" />
        </a>
      </li>
      <li className="nav-desktop__media-item">
        <a href="https://twitter.com/" className="nav-desktop__media-btn">
          <FaXTwitter className="nav-desktop__media-icon" />
        </a>
      </li>
      <li className="nav-desktop__media-item">
        <a href="https://www.youtube.com/" className="nav-desktop__media-btn">
          <FaYoutube className="nav-desktop__media-icon" />
        </a>
      </li>
      <li className="nav-desktop__media-item">
        <a href="https://www.instagram.com/" className="nav-desktop__media-btn">
          <FaInstagram className="nav-desktop__media-icon" />
        </a>
      </li>
      <li className="nav-desktop__media-item">
        <a href="https://www.tiktok.com/" className="nav-desktop__media-btn">
          <FaTiktok className="nav-desktop__media-icon" />
        </a>
      </li>
      <li className="nav-desktop__media-item">
        <a href="https://github.com/BZajc/SomeGym" className="nav-desktop__media-btn">
          <FaGithub className="nav-desktop__media-icon" />
        </a>
      </li>
    </ul>
  );
}

export default NavDesktopMedia;
