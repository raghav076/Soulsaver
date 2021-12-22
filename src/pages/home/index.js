import React, { useEffect, useState } from "react";
import Filters from "../../components/filters";
import Header from "../../components/header";
import ShowAds from "../../components/showAds";
import Sidebar from "../../components/sidebar";
import CustomFilters from "../../customComponent/filters";
import "./home.scss";

const Home = () => {
const [toggled, setToggled] = useState(false);
const [state, setState] = useState('');
const [district, setDistrict] = useState('');
const [bloodG, setBloodG] = useState('');

  const onToggle = (t) => {
    setToggled(t);
  };

  const itemWidth = {state: 170, district: 125, blood: 115}

  return (
    <>
      <Header />
      <div className="container__home">
        <div className="desclaimer__container">
          <marquee>Amet consectetur magna cillum mollit duis aliqua eu amet Lorem. In eiusmod aliquip aliquip eiusmod elit esse aliquip aute. Aute est adipisicing tempor aute proident ex consequat consectetur. Nisi eiusmod dolor laborum culpa elit minim occaecat adipisicing eu. </marquee>
        </div>
        <div className={`main__content__home ${toggled && "small__sidebar"}`}>
          <div className="sidebar">
            <Sidebar onToggle={onToggle} />
          </div>
          <div className="ads__home">
            <CustomFilters
              itemWidth={itemWidth}
              setState={(v) => setState(v)}
              setDistrict={(v) => setDistrict(v)}
              setBloodG={(v) => setBloodG(v)}
            />
            <div className="donate__requests">
              <ShowAds
                role="request"
                maxHeight={130}
                state={state}
                district={district}
                bloodG={bloodG}
              />
            </div>
            <div className="required__requests">
              <ShowAds
                role="donor"
                maxHeight={130}
                state={state}
                district={district}
                bloodG={bloodG}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
};

export default Home;
