import React from "react";
import { FaAngleRight } from "react-icons/fa6";

function PersonalTrainer() {
  return (
    <section>
      <div className="personal-trainer">
        <h2 className="personal-trainer__section-name">
          Need help from professional trainer?
        </h2>
        <div className="personal-trainer__box">
          <div className="personal-trainer__text-box personal-trainer__text-box--1">
            <h3 className="personal-trainer__text-topic">
              Personal Trainer: Tailored Fitness Solutions for You
            </h3>
            <p className="personal-trainer__text">
              Experience the pinnacle of personal training at our gym! Our team
              of qualified personal trainers is ready to accompany you on your
              journey to achieving your fitness goals.
            </p>
          </div>
          <div className="personal-trainer__text-box personal-trainer__text-box--2">
            <h3 className="personal-trainer__text-topic">
              We provide comprehensive support, including:
            </h3>
            <ul className="personal-trainer__list">
              <li className="personal-trainer__list-item">
                Personalized Training Plan: Your workout will be tailored to
                your goals, abilities, and preferences. There's no
                one-size-fits-all - every plan is created specifically for you.
              </li>
              <li className="personal-trainer__list-item">
                Professional Nutritional Guidance: We understand that healthy
                eating plays a crucial role in achieving fitness success. Our
                personal trainer will help you create a balanced nutrition plan
                that supports your goals.
              </li>
              <li className="personal-trainer__list-item">
                Motivational Support: Sometimes the hardest part is taking the
                first step. Our personal trainer will be there to motivate and
                inspire you to push past your limits.
              </li>
            </ul>
            <p className="personal-trainer__text">
              Don't wait any longer! Start your journey to a better version of
              yourself with our experienced personal trainer today.
            </p>
          </div>
          <div className="personal-trainer__text-box personal-trainer__text-box--3">
            <h3 className="personal-trainer__text-topic">Training Options:</h3>
            <ul className="personal-trainer__list">
              <li className="personal-trainer__list-item">
                <span className="personal-trainer__bold-text">
                  One-on-One Training:
                </span>{" "}
                Get personalized attention and guidance with one-on-one training
                sessions. Our personal trainer will work closely with you to
                design a workout plan that suits your specific needs and goals.
              </li>
              <li className="personal-trainer__list-item">
                <span className="personal-trainer__bold-text">
                  Group Training:
                </span>{" "}
                Join our group training sessions and enjoy the benefits of
                working out with others. Our personal trainer will lead the
                group through a variety of exercises and provide individualized
                modifications as needed.
              </li>
              <li className="personal-trainer__list-item">
                <span className="personal-trainer__bold-text">
                  Online Training:
                </span>{" "}
                Can't make it to the gym? No problem! Our personal trainer also
                offers online training sessions. Get the same level of expertise
                and guidance from the comfort of your own home.
              </li>
            </ul>
            <p className="personal-trainer__text">
              Whether you prefer one-on-one training, group sessions, or online
              training, we have options to suit your needs and schedule. Contact
              us today to get started on your fitness journey!
            </p>
          </div>
          <button className="personal-trainer__prices-button">
            Prices from 40${" "}
            <FaAngleRight className="personal-trainer__prices-button-icon" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default PersonalTrainer;
