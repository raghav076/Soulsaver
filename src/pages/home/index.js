import React, { useState } from 'react'
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import './home.scss';

const Home = () => {
    
    const [toggled, setToggled] = useState(false);

    const onToggle = (t) => {
        setToggled(t);
    }

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
                        <div className="filters"></div>
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
