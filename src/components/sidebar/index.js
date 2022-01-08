import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import './sidebar.scss';

const Sidebar = React.memo(({ onToggle }) => {

    const navigate = useNavigate();

    const [toggled, setToggled] = useState(false);
    const [amount, setAmount] = useState('');

    const inputRef = useRef();

    useEffect(() => {
        const checkWidth = () => {
            if (window.innerWidth < 900) {
                if (inputRef.current!==document.activeElement)
                    setToggled(true);
            } else setToggled(false);
        }
        window.addEventListener('resize', checkWidth);
        checkWidth();
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
            {/* <div className="sidebar__item__container" onClick={() => { navigate('donate') }}>
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
            </div> */}
            <div className="sidebar__item__container" onClick={() => { navigate('/request', { state: { type: 'donate' } }) }}>
                <div className="sidebar__item__logo">
                    <VolunteerActivismIcon />
                </div>
                <div className={`sidebar__item__title ${toggled && 'none'}`}>
                    Donate Blood
                </div>
            </div>
            <div className="sidebar__item__container" onClick={() => { navigate('/request', { state: { type: 'request' } }) }}>
                <div className="sidebar__item__logo">
                    <i className="fas fa-heartbeat"></i>
                </div>
                <div className={`sidebar__item__title ${toggled && 'none'}`}>
                    Request Blood
                </div>
            </div>
            {/* <div className={`sidebar__item__container ${!toggled && 'none'}`}>
                <div className="sidebar__item__logo">
                    <i class="fas fa-donate"></i>
                </div>
            </div>
            <div className={`donation__item__container ${toggled && 'none'}`}>
                <input ref={inputRef} type="number" placeholder="Enter Amount" value={amount} onChange={(e) => { e.target.value > 0 ? setAmount(e.target.value) : setAmount(0) }} />
                <div className='sidebar__item__title'>
                    <button onClick={() => { navigate('support', { state: { amount: amount } }) }}>Donate Us</button>
                </div>
            </div> */}
        </div>
    )
});

export default Sidebar;
