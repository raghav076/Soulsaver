import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import SearchIcon from '@mui/icons-material/Search';
import './sidebar.scss';

const Sidebar = ({ onToggle }) => {

    const navigate = useNavigate();

    const [toggled, setToggled] = useState(false);
    const [amount, setAmount] = useState('');

    useEffect(() => {
        const checkWidth = () => {
            if (window.innerWidth < 900) {
                setToggled(true);
            } else setToggled(false);
        }
        window.addEventListener('resize', checkWidth);

        return () => {
            window.removeEventListener('resize', checkWidth);
        }

    }, []);

    useEffect(() => {
        onToggle(toggled);
    }, [toggled]);

    return (
        <div
            style={{ width: `${!toggled ? '100%' : '50px'}`, minWidth: `${!toggled ? '170px' : '0px'}` }}
            className="sidebar__container"
        >
            <div className="icon__container">
                <div
                    className="toggle__icon"
                    onClick={() => { setToggled(!toggled) }}
                >
                    {toggled ? <ArrowForwardIosIcon /> : <ArrowBackIosNewOutlinedIcon />}
                </div>
            </div>
            <div className="sectionBreak"></div>
            <div className="sidebar__item__container" onClick={() => { navigate('donate') }}>
                <div className="sidebar__item__logo">
                    <SearchIcon />
                </div>
                <div className={`sidebar__item__title ${toggled && 'none'}`}>
                    Donors
                </div>
            </div>
            <div className="sidebar__item__container" onClick={() => { }} onClick={() => { navigate('request') }}>
                <div className="sidebar__item__logo">
                    <SearchIcon />
                </div>
                <div className={`sidebar__item__title ${toggled && 'none'}`}>
                    Requestors
                </div>
            </div>
            <div className="sidebar__item__container" onClick={() => { navigate('donate') }}>
                <div className="sidebar__item__logo">
                    <i className="fas fa-hand-holding-medical"></i>
                </div>
                <div className={`sidebar__item__title ${toggled && 'none'}`}>
                    Donate Blood
                </div>
            </div>
            <div className="sidebar__item__container" onClick={() => { navigate('request') }}>
                <div className="sidebar__item__logo">
                    <i className="fas fa-heartbeat"></i>
                </div>
                <div className={`sidebar__item__title ${toggled && 'none'}`}>
                    Request Blood
                </div>
            </div>
            <div className={`sidebar__item__container ${!toggled && 'none'}`}>
                <div className="sidebar__item__logo">

                </div>
            </div>
            <div className={`donation__item__container ${toggled && 'none'}`}>
                <input type="number" placeholder="Enter Amount" value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                <div className='sidebar__item__title'>
                    <button onClick={() => { navigate('support', { state: { amount: amount } }) }}>Donate</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
