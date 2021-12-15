import React, { useState, useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import './sidebar.scss';

const Sidebar = ({ onToggle }) => {

    const [toggled, setToggled] = useState(false);

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
    }, [toggled])

    return (
        <div
            style={{ width: `${!toggled ? '100%' : '50px'}` }}
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
        </div>
    )
}

export default Sidebar;
