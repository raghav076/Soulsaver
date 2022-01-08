import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import propTypes from "prop-types";
import moment from 'moment'
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FadeInModal from "../modal";
import UserDialog from "../UserDialog";
import Loading from "../loading/index"
import { serverBaseURL } from '../../config';
import "./showAds.scss";

const ShowAds = ({ role, maxHeight, liWidths , state, district, bloodG}) => {
  const navigate = useNavigate();
  const [requestData, setRequestData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setloading] = useState(true);

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
    setloading(true);
    const res = await fetch(
      `${serverBaseURL}/${data.endPoint}?state=` +
        encodeURIComponent(`${state}`) +
        "&district=" +
        encodeURIComponent(`${district}`)+'&bloodG='+encodeURIComponent(`${bloodG}`)
    )
      .then((t) => t.json())
      .catch((err) => err);
    setRequestData(res.data);
    setloading(false);
  }, [role,state,district,bloodG]);

  const handleClose = () => setIsOpen(false);
  
  const labelStyles = {
    name: { width: liWidths.name },
    phone: { width: liWidths.phone },
    city: { width: liWidths.city },
    bgp: { width: liWidths.bgp },
    updated: { width: liWidths.updated }
  }

  let i = 0;

  return (
    <div className="showAds__container">
      <div className="header__row">
        <div className="tagLine">{data.tagLine}</div>
        <div
          className="post_ad_button"
          onClick={() => navigate(data.buttonHref, { state: data.state })}
        >
          {data.buttonTag}
        </div>
      </div>
      <div className="show__ads">
        <ul className="ad__labels">
          <li className="name" style={labelStyles.name}>
            Name
          </li>
          <li className="phone" style={labelStyles.phone}>
            Phone
          </li>
          <li className="city" style={labelStyles.city}>
            District
          </li>
          <li className="bgp" style={labelStyles.bgp}>
            Blood G
          </li>
          <li className="updated" style={labelStyles.updated}>
            Updated
          </li>
          <li className="button"></li>
        </ul>
        {loading ? (
          <div className="loading">
            <Loading />{" "}
          </div>
        ) : (
          <div className="ads" style={{ maxHeight: maxHeight }}>
            {requestData &&
              requestData.map((d, idx) => {
                i++;
                return (
                  <div key={idx}>
                    <ul
                      className="ad__data"
                      style={{
                        backgroundColor: i % 2 === 0 ? "#dceaf7" : "white",
                      }}
                    >
                      <li className="name" style={labelStyles.name}>
                        {d.firstName + " " + d.lastName}
                      </li>
                      <li className="phone" style={labelStyles.phone}>
                        {d.phoneNumber}
                      </li>
                      <li className="city" style={labelStyles.city}>
                        {d.district}
                      </li>
                      <li className="bgp" style={labelStyles.bgp}>
                        {d.bloodGroup}
                      </li>
                      <li className="updated" style={labelStyles.updated}>
                        {moment(d.updatedAt).fromNow()}
                      </li>
                      <li className="button">
                        <button
                          onClick={() => {
                            setIsOpen(true);
                            setUser(d);
                          }}
                        >
                          <KeyboardDoubleArrowRightIcon />
                        </button>
                      </li>
                    </ul>
                  </div>
                );
              })}
          </div>
        )}

        <FadeInModal
          isOpen={isOpen}
          handleClose={handleClose}
          component={
            <UserDialog user={user} role={role} handleClose={handleClose} />
          }
        />
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
