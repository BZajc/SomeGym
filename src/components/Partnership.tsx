import React from "react";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import {
  CgGym,
  CgBatteryFull,
  CgBowl,
  CgPill,
  CgPlayButtonR,
} from "react-icons/cg";

function Partnership() {
  return (
    <section>
      <div className="partnership">
        <h3 className="partnership__text">Our Partners</h3>
        <div className="partnership__box">
          <div className="partnership__partner">
            <MdOutlineSportsGymnastics />
            <p className="partnership__partner-name">Lorem Ipsum</p>
          </div>
          <div className="partnership__partner">
            <CgGym />
            <p className="partnership__partner-name">Lorem Ipsum</p>
          </div>
          <div className="partnership__partner">
            <CgBatteryFull />
            <p className="partnership__partner-name">Lorem Ipsum</p>
          </div>
          <div className="partnership__partner">
            <CgBowl />
            <p className="partnership__partner-name">Lorem Ipsum</p>
          </div>
          <div className="partnership__partner">
            <CgPill />
            <p className="partnership__partner-name">Lorem Ipsum</p>
          </div>
          <div className="partnership__partner">
            <CgPlayButtonR />
            <p className="partnership__partner-name">Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partnership;
