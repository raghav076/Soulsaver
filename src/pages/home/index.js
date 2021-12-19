import React, { useEffect, useState } from "react";
import Filters from "../../components/filters";
import Header from "../../components/header";
import ShowAds from "../../components/showAds";
import Sidebar from "../../components/sidebar";
import CustomFilters from "../../customComponent/filters";
import "./home.scss";

const Home = () => {
  const [toggled, setToggled] = useState(false);

  const onToggle = (t) => {
    setToggled(t);
  };

  const itemWidth = {state: 170, district: 125, blood: 115}

  return (
    <>
      <Header />
      <div className="container__home">
        <div className="desclaimer__container"></div>
        <div className={`main__content__home ${toggled && "small__sidebar"}`}>
          <div className="sidebar">
            <Sidebar onToggle={onToggle} />
          </div>
          <div className="ads__home">
            <CustomFilters itemWidth={itemWidth} />
            <div className="donate__requests">
              <ShowAds role="request" maxHeight={130} />
            </div>
            <div className="required__requests">
              <ShowAds role="donor" maxHeight={130} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
};

export default Home;
