import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import propTypes from "prop-types";
import Data from "../data";
import "./showAds.scss";

const ShowAds = ({ role, maxHeight }) => {
  const navigate = useNavigate();
  const [requestData, setRequestData] = useState([]);

  const data = role === "donor"
      ? {
        tagLine: "Donors currently available",
        buttonTag: "Donate Blood",
        buttonHref: "/request",
        state: { type: 'donor' },
        endPoint: 'getDonors'
      }
      : {
        tagLine: "People requesting blood",
        buttonTag: "Request blood",
        buttonHref: "/request",
        state: { type: 'request' },
        endPoint: 'getRequests'
      };

  useEffect(async() => { 
    const res = await fetch(`http://localhost:4000/${data.endPoint}`)
      .then((t) => t.json())
      .catch((err) => err);
    setRequestData(res.data);
  }, [role]);
  
  return (
    <div className="showAds__container">
      <div className="header__row">
        <div className="tagLine">{data.tagLine}</div>
        <div className="post_ad_button" onClick={() => navigate(data.buttonHref, { state: data.state })}>{data.buttonTag}</div>
      </div>
      <div className="show__ads">
        <Data
          classname="ad__labels"
          name="Name"
          phone="Phone"
          city="District"
          bgp="Blood G"
          updated="Updated"
        />
        <div className="ads" style={{maxHeight:maxHeight}}>
          {requestData.map((d) => (
            <Data
            classname="ad__data"
            name={d.firstName + ' ' + d.lastName}
            phone={d.phoneNumber}
            city={d.district}
            bgp={d.bloodGroup}
            updated="1 day ago"
          />
          ))}
        </div>
      </div>
    </div>
  );
};

ShowAds.propTypes = {
  role: propTypes.string.isRequired,
};

export default ShowAds;
