import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import reviews1 from "../img/reviews1.jpg";
import reviews2 from "../img/reviews2.jpg";
import reviews3 from "../img/reviews3.jpg";
import reviews4 from "../img/reviews4.jpg";
import reviews5 from "../img/reviews5.jpg";

interface ReviewData {
  image: string;
  text: string;
}

function Reviews() {
  const reviewsData: ReviewData[] = [
    {
      image: reviews1,
      text: "I love this gym! The trainers are amazing and the facilities are top-notch.",
    },
    {
      image: reviews2,
      text: "The atmosphere at this gym is fantastic. It's always motivating and inspiring.",
    },
    {
      image: reviews3,
      text: "I've seen great results since joining this gym. The workouts are challenging and effective.",
    },
    {
      image: reviews4,
      text: "The staff here is friendly and helpful. They always make me feel welcome.",
    },
    {
      image: reviews5,
      text: "This gym has everything I need. It's clean, well-equipped, and has a variety of classes.",
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0); // Used to display different content for reviews__card
  const [mediaQuery, setMediaQuery] = useState(window.innerWidth > 768); // Used to determine the number of reviews__card displayed

  useEffect(() => {
    const handleResize = () => {
      setMediaQuery(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex(
        (prevIndex) => (prevIndex + 1) % reviewsData.length
      );
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [reviewsData.length, currentReviewIndex]);

  const renderCard = () => {
    const randomName = faker.person.fullName();
    const randomIndex = Math.floor(Math.random() * reviewsData.length);
    const currentReview = reviewsData[randomIndex];

    return (
      <div className="reviews__card">
        <div className="reviews__card-top">
          <img
            src={currentReview.image}
            alt={`reviews${randomIndex + 1}`}
            className="reviews__card-img"
          />
          <p className="reviews__card-username">{randomName}</p>
        </div>
        <div className="reviews__card-bottom">
          <p className="reviews__card-text">{currentReview.text}</p>
        </div>
      </div>
    );
  };

  return (
    <section>
      <div className="reviews">
        <h3 className="reviews__section-name">Reviews</h3>
        <div className="reviews__box">
          <div className="reviews__overlay"></div>
          {mediaQuery ? (
            <>
              {renderCard()}
              {renderCard()}
            </>
          ) : (
            renderCard()
          )}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
