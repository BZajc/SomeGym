import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaGithub,
} from "react-icons/fa";

function Media() {
  return (
    <section>
      <div className="media">
        <h3 className="media__section-name">Our socials</h3>
        <p className="media__text">
            Stay connected with us on social media for updates, fitness tips, and more.
        </p>
        <div className="media__icons-box">
          <a href="https://www.facebook.com/">
            <FaFacebook className="media__icon" />
          </a>
          <a href="https://twitter.com/">
            <FaTwitter className="media__icon" />
          </a>
          <a href="https://www.youtube.com/">
            <FaYoutube className="media__icon" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram className="media__icon" />
          </a>
          <a href="https://www.tiktok.com/">
            <FaTiktok className="media__icon" />
          </a>
          <a href="https://github.com/BZajc/SomeGym">
            <FaGithub className="media__icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Media;
