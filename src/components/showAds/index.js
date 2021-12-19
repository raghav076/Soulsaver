import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import propTypes from "prop-types";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Data from "../data";
import "./showAds.scss";

const ShowAds = ({ role, maxHeight, liWidths , state, district, bloodG}) => {
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

  useEffect(async () => {
    const url = `state=${state}&district=${district}&bloodG=${bloodG}`
    const res = await fetch(
      `http://localhost:4000/${data.endPoint}?state=` +
        encodeURIComponent(`${state}`) +
        "&district=" +
        encodeURIComponent(`${district}`)+'&bloodG='+encodeURIComponent(`${bloodG}`)
    )
      .then((t) => t.json())
      .catch((err) => err);
    setRequestData(res.data);
    console.log(res.data);
  }, [role,state,district,bloodG]);

  
  const labelStyles = {
    name: { width: liWidths.name },
    phone: { width: liWidths.phone },
    city: { width: liWidths.city },
    bgp: { width: liWidths.bgp },
    updated: { width: liWidths.updated}
  }

  return (
    <div className="showAds__container">
      <div className="header__row">
        <div className="tagLine">{data.tagLine}</div>
        <div className="post_ad_button" onClick={() => navigate(data.buttonHref, { state: data.state })}>{data.buttonTag}</div>
      </div>
      <div className="show__ads">
        <ul className="ad__labels">
          <li className="name" style={labelStyles.name}>Name</li>
          <li className="phone" style={labelStyles.phone}>Phone</li>
          <li className="city" style={labelStyles.city}>District</li>
          <li className="bgp" style={labelStyles.bgp}>Blood G</li>
          <li className="updated" style={labelStyles.updated}>Updated</li>
          <li className="button"></li>
        </ul>
        <div className="ads" style={{ maxHeight: maxHeight }}>
          {requestData&&requestData.map((d) => (
            <ul className="ad__data">
              <li className="name" style={labelStyles.name}>{d.firstName + ' ' + d.lastName}</li>
              <li className="phone" style={labelStyles.phone}>{d.phoneNumber}</li>
              <li className="city" style={labelStyles.city}>{d.district}</li>
              <li className="bgp" style={labelStyles.bgp}>{d.bloodGroup}</li>
              <li className="updated" style={labelStyles.updated}>1 day ago</li>
              <li className="button">
                <button>
                  <KeyboardDoubleArrowRightIcon />
                </button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

ShowAds.propTypes = {
  role: propTypes.string.isRequired,
};
ShowAds.defaultProps = {
  liWidths: {
    name: '125px',
    phone: '100px',
    city: '100px',
    bgp: '75px',
    updated: '75px',
  }
}

export default ShowAds;
