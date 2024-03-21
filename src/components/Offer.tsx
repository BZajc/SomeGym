import React from "react";
import { useState } from "react";

interface OfferProps {
  price: string;
  cardName: string;
  frequency: string;
}

function Offer() {
  const offers: OfferProps[] = [
    {
      price: "30$",
      cardName: "Flexible Gym Membership",
      frequency: "Month-to-month",
    },
    {
      price: "150$",
      cardName: "Half Year Gym Membership",
      frequency: "6 months",
    },
    {
      price: "300$",
      cardName: "Premium Gym Membership",
      frequency: "12 months",
    },
  ];

  const [selectedOffer, setSelectedOffer] = useState<OfferProps>(offers[0]);

  const handleButtonClick = (index: number) => {
    setSelectedOffer(offers[index]);
  };

  return (
    <section>
      <div className="offer">
        <h3 className="offer__check-offer-text">Check our offer</h3>
        <div className="offer__btn-box">
          <button className="offer__btn" onClick={() => handleButtonClick(0)}>
            Flexible Membership
          </button>
          <button className="offer__btn" onClick={() => handleButtonClick(1)}>
            Half Year Membership
          </button>
          <button className="offer__btn" onClick={() => handleButtonClick(2)}>
            Premium Membership
            <div className="offer__best-deal">Best deal</div>
          </button>
        </div>
        <div className="offer__card-box">
          <div className="offer__card offer__best-btn">
            <div className="offer__card-top">
              <p className="offer__card-type">{selectedOffer.cardName}</p>
              <p className="offer__card-type-subtext">
                Perfect for new club member
              </p>
            </div>
            <div className="offer__card-bottom">
              <p className="offer__card-price">{selectedOffer.price}</p>
              <p className="offer__card-price-subtext">
                {selectedOffer.frequency}
              </p>
              <ul>
                <li className="offer__card-benefit">Club access 24/7</li>
                <li className="offer__card-benefit">Free workout water</li>
                <li className="offer__card-benefit">
                  Group classes in the price
                </li>
                <li className="offer__card-benefit">
                  Fitness plan in the price
                </li>
                <li className="offer__card-benefit">
                  One-month notice period ending at the end of the month
                </li>
              </ul>
              <button className="offer__card-read-more">
                Read more {">>"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
