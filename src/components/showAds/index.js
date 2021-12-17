import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './showAds.scss';

const ShowAds = () => {
    const sampleAd = (
        <ul className="ad__data">
            <li className="name">Deepak Prasad</li>
            <li className="phone">7610760240</li>
            <li className="city">Asansol</li>
            <li className="bgp">O +ve</li>
            <li className="updated">5 min</li>
            <li className="button"><button><KeyboardDoubleArrowRightIcon /></button></li>
        </ul>
    );
    const renderAds = () => {
        let result = [];
        for (let i = 0; i < 10; i++) {
            result.push(sampleAd);
        }
        return result;
    }
    return (
        <div className="showAds__container">
            <div className="header__row">
                <div className="tagLine">Help Someone by dontaing blood</div>
                <div className="post_ad_button">Request for blood</div>
            </div>
            <div className="show__ads">
                <ul className="ad__labels">
                    <li className="name">Name</li>
                    <li className="phone">Phone</li>
                    <li className="city">City</li>
                    <li className="bgp">Blood G</li>
                    <li className="updated">Updated</li>
                    <li className="button"></li>
                </ul>
                <div className="ads">
                    {renderAds()}
                </div>
            </div>
        </div>
    )
}

export default ShowAds;
