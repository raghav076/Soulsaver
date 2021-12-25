import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Form from '../../components/form';
import Header from '../../components/header';
import ShowAds from '../../components/showAds';
import CustomFilters from '../../customComponent/filters';
import './request.scss';

const Request = () => {
    
    const  props  = useLocation();
    let type = (props&&props.state)?props.state.type:'request';
    // type = type || 'request';

    const maxItemWidth = { state: 225, district: 175, blood: 175 };
    const [itemWidth, setItemWidth] = useState(maxItemWidth);
    const [state, setState] = useState("");
    const [district, setDistrict] = useState("");
    const [bloodG, setBloodG] = useState("");

    useEffect(() => {
        const checkSize = () => {
            if (window.innerWidth < 700) {
                setItemWidth({ state: 170, district: 120, blood: 120 })
            } else setItemWidth(maxItemWidth);
        }
        window.addEventListener('resize', checkSize)

        return () => window.removeEventListener('resize', checkSize);
    }, []);

    const liWidths = {
        name: '200px',
        phone: '150px',
        city: '150px',
        bgp: '125px',
        updated: '125px',
    }

    return (
      <div>
        <Header />
        <div className="filters__container">
          <CustomFilters
            itemWidth={itemWidth}
            setState={(v) => setState(v)}
            setDistrict={(v) => setDistrict(v)}
            setBloodG={(v) => setBloodG(v)}
          />
        </div>
        <div className="ads__display">
          <ShowAds
            role={type === "donor" ? "request" : "donor"}
            liWidths={liWidths}
            state={state}
            district={district}
            bloodG={bloodG}
          />
        </div>
        <div className="section__break"></div>
        <Form type={type} />
      </div>
    );
}

export default Request;
