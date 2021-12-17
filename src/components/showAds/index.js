import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "./showAds.scss";
import Data from "../data";

const ShowAds = () => {
  return (
    <div className="showAds__container">
      <div className="header__row">
        <div className="tagLine">Help Someone by dontaing blood</div>
        <div className="post_ad_button">Request for blood</div>
      </div>
      <div className="show__ads">
        {/* <ul className="ad__labels">
          <li className="name">Name</li>
          <li className="phone">Phone</li>
          <li className="city">City</li>
          <li className="bgp">Blood G</li>
          <li className="updated">Updated</li>
          <li className="button"></li>
        </ul> */}
        <Data
          classname="ad__labels"
          name="name"
          phone="phone"
          city="City"
          bgp="Blood G"
          updated="updated"
        />
        {/* data */}
        <div className="ads">
          {/* <ul className="ad__data">
            <li className="name">Deepak Prasad</li>
            <li className="phone">7610760240</li>
            <li className="city">Asansol</li>
            <li className="bgp">O +ve</li>
            <li className="updated">5 min</li>
            <li className="button">
              <button>
                <KeyboardDoubleArrowRightIcon />
              </button>
            </li>
          </ul> */}
          <Data
            classname="ad__data"
            name="Deepak"
            phone="8635626162"
            city="Asansol"
            bgp="AB +ve"
            updated="1 day"
          />
          <Data
            classname="ad__data"
            name="Raghav"
            phone="0717382728"
            city="Bhopal"
            bgp="B +ve"
            updated="2 day"
          />
        </div>
      </div>
    </div>
  );
};

export default ShowAds;
