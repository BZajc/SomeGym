import React from "react";
import googlePlayBadge from "../img/googlePlayBadge.png";
import { FaStopwatch, FaMobile, FaCalendarDays, FaPerson,FaDumbbell, FaNotesMedical } from "react-icons/fa6";

function GeneralInfo() {

  const renderGeneralInfo = [
    
    {
      icon: <FaStopwatch className="general-info__main-icon" />,
      topic: "Access 24/7",
      text: "Get access to our gym facilities 24 hours a day, 7 days a week."
    },
    {
      icon: <FaMobile className="general-info__main-icon" />,
      topic: "Mobile App",
      text: "Download our mobile app to easily book classes, track your progress, and stay connected with our community.",
      app: <img src={googlePlayBadge} alt="Google Play Badge" className="general-info__app-badge" />
    },
    {
      icon: <FaCalendarDays className="general-info__main-icon" />,
      topic: "Customized Membership for You",
      text: "We offer flexible membership options tailored to your specific needs and goals."
    },
    {
      icon: <FaPerson className="general-info__main-icon" />,
      topic: "Fitness, HIIT & Yoga Classes",
      text: "Join our wide range of fitness, high-intensity interval training (HIIT), and yoga classes led by experienced instructors."
    },
    {
      icon: <FaDumbbell className="general-info__main-icon" />,
      topic: "Diverse Equipment Selection",
      text: "Explore our extensive selection of state-of-the-art gym equipment to support your fitness journey."
    },
    {
      icon: <FaNotesMedical className="general-info__main-icon" />,
      topic: "Training and Dietary Plans",
      text: "Receive personalized training programs and dietary plans from our certified trainers to help you achieve your fitness goals."
    }
  ]
  return (
    <section>
      <div className="general-info">
        <div className="general-info__header-box">
          <div className="general-info__header-overlay">
            <h3 className="general-info__section-name">
              Check what you can get by being a member of our gym!
            </h3>
          </div>
        </div>
        <div className="general-info__main-box">
          <div className="general-info__main-overlay"></div>
          {renderGeneralInfo.map((info, index) => (
            <div className="general-info__main" key={index}>
              <div className="general-info__main-icon-box">{info.icon}</div>
              <div className="general-info__text-box">
                <div className="general-info__topic">{info.topic}</div>
                <div className="general-info__text">{info.text}</div>
                {info.app && <div className="general-info__app-box">{info.app}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GeneralInfo;
