import React from "react";
import { useNavigate } from "react-router";
import propTypes from "prop-types";
import Data from "../data";
import "./showAds.scss";

const ShowAds = ({ role }) => {
  const navigate = useNavigate();
  const data =
    role === "donate"
      ? {
          tagLine: "Donors currently available",
          buttonTag: "Donate Blood",
          buttonHref: "donate"
        }
      : {
          tagLine: "People requesting blood",
          buttonTag: "Request blood",
          buttonHref: "request"
        };

      
      
  return (
    <div className="showAds__container">
      <div className="header__row">
        <div className="tagLine">{data.tagLine}</div>
        <div className="post_ad_button" onClick={()=>navigate(data.buttonHref)}>{data.buttonTag}</div>
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

ShowAds.propTypes = {
  role: propTypes.string.isRequired,
};

export default ShowAds;
