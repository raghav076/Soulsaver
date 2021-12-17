import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import PropTypes from "prop-types";
import "./data.scss";

const Data = ({ classname, name, phone, city, bgp, updated }) => {
  return (
    <ul className={classname}>
      <li className="name">{name}</li>
      <li className="phone">{phone}</li>
      <li className="city">{city}</li>
      <li className="bgp">{bgp}</li>
      <li className="updated">{updated}</li>
      <li className="button">
        {classname == "ad__data" ? (
          <button>
            <KeyboardDoubleArrowRightIcon />
          </button>
        ) : (
          ""
        )}
      </li>
    </ul>
  );
};

Data.propTypes = {
  classname: PropTypes.string.isRequired,
  name: PropTypes.string,
  phone: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bgp: PropTypes.string.isRequired,
  updated: PropTypes.string,
};

Data.defaultProps = {
  name: "unknown",
};

export default Data;
