import React, { useState } from 'react'
import Filters from '../../components/filters';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import './home.scss';

const Home = () => {
    
    const [toggled, setToggled] = useState(false);

    const onToggle = (t) => {
        setToggled(t);
    }

    const [states, setStates] = useState([]);
    const [district, setDistrict] = useState([]);
    const [city, setCity] = useState([]);
    const [bloodGP, setBloodGP] = useState(['A +ve', 'B +ve', 'AB +ve', 'O +ve', 'A -ve', 'B -ve', 'AB -ve', 'O -ve']);
    const [selectedState, setSelectedState] = useState('');
    const [selectedDist, setSelectedDist] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedBGP, setselectedBGP] = useState('');

    return (
        <>
            <Header />
            <div className="container__home">
                <div className="desclaimer__container"></div>
                <div className={`main__content__home ${toggled&&'small__sidebar'}`}>
                    <div className="sidebar">
                        <Sidebar onToggle={onToggle}/>
                    </div>
                    <div className="ads__home">
                        <div className="filters">
                            <div className="filter__title">Filter Data:</div>
                            <Filters
                                itemWidth={170}
                                placeHolder='State'
                                value={selectedState}
                                handleChange={(value) => setSelectedState(value)} 
                            />
                            <Filters
                                itemWidth={125}
                                placeHolder='District' 
                                value={selectedDist}
                                handleChange={(value) => setSelectedDist(value)} 
                            />
                            <Filters
                                itemWidth={125}
                                placeHolder='City'
                                value={selectedCity}
                                handleChange={(value) => setSelectedCity(value)} 
                            />
                            <Filters
                                itemWidth={115}
                                placeHolder='Blood Group'
                                options={bloodGP}
                                value={selectedBGP}
                                handleChange={(value) => setselectedBGP(value)} 
                            />
                        </div>
                        <div className="donate__requests"></div>
                        <div className="required__requests"></div>
                    </div>
                </div>
            </div>
            <div className="footer"></div>
        </>
    )
}

export default Home;
