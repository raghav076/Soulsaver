import React, { useState, useEffect } from 'react';
import Filters from '../../components/filters';
import stateData from "../../constants/states";
import { bloodGP } from "../../constants/bloodGroups";
import './customFilters.scss';

const CustomFilters = ({itemWidth,setState, setDistrict, setBloodG}) => {

  const [states, setStates] = useState(stateData.map((s) => s.state));
  const [districts, setDistricts] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedDist, setSelectedDist] = useState("");
    const [selectedBGP, setselectedBGP] = useState("");
    
    useEffect(() => {
        setSelectedDist('');
        setDistrict('');
        setDistricts([]);
        stateData.forEach(
            (data, idx) =>
                data.state === selectedState && setDistricts(stateData[idx].districts)
        );
    }, [selectedState]);

    return (
        <div className="filters">
            <div className="filter__title">Filter Data:</div>
            <Filters
                itemWidth={itemWidth.state}
                options={states}
                placeHolder="State"
                value={selectedState}
                handleChange={(value) => {setSelectedState(value); setState(value) }}
            />
            <Filters
                itemWidth={itemWidth.districts}
                options={districts}
                placeHolder="District"
                inputVale={selectedDist}
                value={selectedDist}
                handleChange={(value) => {setSelectedDist(value); setDistrict(value)}}
            />
            <Filters
                itemWidth={itemWidth.blood}
                placeHolder="Blood Group"
                options={bloodGP}
                value={selectedBGP}
                handleChange={(value) => {setselectedBGP(value); setBloodG(value)}}
            />
        </div>
    )
}

CustomFilters.defaultProps = {
    itemWidth: {state: 170, district: 125, blood: 115}
}

export default CustomFilters;
