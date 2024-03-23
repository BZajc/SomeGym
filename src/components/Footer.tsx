import React from "react";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__box">
        <div className="footer__purpose-text-box">
          <p className="footer__purpose-text">
            Below links are only for a visible purpose and have no functionality
          </p>
        </div>
        <div className="footer__list-box">
          <h3 className="footer__list-name">General:</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <button>About Us</button>
            </li>
            <li className="footer__list-item">
              <button>Contact</button>
            </li>
            <li className="footer__list-item">
              <button>Training Offer</button>
            </li>
            <li className="footer__list-item">
              <button>Class Schedule</button>
            </li>
            <li className="footer__list-item">
              <button>Pricing</button>
            </li>
          </ul>
          
        </div>
        <div className="footer__list-box">
          <h3 className="footer__list-name">Additional:</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <button>Additional Services</button>
            </li>
            <li className="footer__list-item">
              <button>Our Facilities</button>
            </li>
            <li className="footer__list-item">
              <button>Instructors</button>
            </li>
            <li className="footer__list-item">
              <button>Blog</button>
            </li>
            <li className="footer__list-item">
              <button>FAQ</button>
            </li>
          </ul>
        </div>
        <div className="footer__list-box">
          <h3 className="footer__list-name">Other:</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <button>Terms of Service</button>
            </li>
            <li className="footer__list-item">
              <button>Careers</button>
            </li>
            <li className="footer__list-item">
              <button>Partners</button>
            </li>
            <li className="footer__list-item">
              <button>Gallery</button>
            </li>
            <li className="footer__list-item">
              <button>Privacy Policy</button>
            </li>
          </ul>
        </div>
        <div className="footer__list-box">
          <h3 className="footer__list-name">Contact:</h3>

          <ul className="footer__list">
            <li className="footer__list-item">Address: 123 Main Street</li>
            <li className="footer__list-item">
              Phone: <a href="tel:555-123-4567">555-123-4567</a>
            </li>
            <li className="footer__list-item">
              Email:{" "}
              <a href="mailto:example@example.com">example@example.com</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
