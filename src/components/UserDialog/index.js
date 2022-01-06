import React, {useEffect, useState} from 'react';
import moment from "moment";
import './userDialog.scss';

const UserDialog = ({ user, role, handleClose }) => {
    const [state, setState] = useState(1);      //state 1 means user details and 2 means report state
    const [reportOne, setReportOne] = useState(false);
    const [reportTwo, setReportTwo] = useState(false);

    const userDetails = (user) => {
        const { firstName, lastName, phoneNumber, state, district, bloodGroup, updatedAt } = user;
        return (
            <div className="user__dialog__container">
                <div className="user__dialog__label">
                    <span>Name:</span>
                    <span>{firstName + ' ' + lastName}</span>
                </div>
                <div className="user__dialog__label">
                    <span>Phone Number:</span>
                    <span>{phoneNumber}</span>
                </div>
                <div className="user__dialog__label">
                    <span>Blood Group:</span>
                    <span>{bloodGroup}</span>
                </div>
                <div className="user__dialog__label">
                    <span>State:</span>
                    <span>{state}</span>
                </div>
                <div className="user__dialog__label">
                    <span>District:</span>
                    <span>{district}</span>
                </div>
                <div className="user__dialog__label">
                    <span>Last Updated:</span>
                    <span>{ moment(updatedAt).fromNow() || '1 day'}</span>
                </div>
                <div className="report__section">
                    <span>Found Incorrect Details?</span>
                    <button className="report__button" onClick={() => setState(2)}>Report</button>
                </div>
            </div>
        )
    }
    
    const reportPage = () => {
        return (
            <div className="report__page__container">
                <div className="report__row">
                    <input type="checkbox" value={reportOne} onChange={(e) => setReportOne(e.target.checked)} />
                    <label>Incorrect Phone Number?</label>
                </div>
                <div className="report__row">
                    <input type="checkbox" value={reportTwo} onChange={(e) => setReportTwo(e.target.checked)} />
                    {role === 'donor' ? <label>Donor already donated?</label> : <label>Requestor already got blood?</label>}
                </div>
                <div className="report__section">
                    <button className="report__button" onClick={() => { alert("Reported Successfully"); handleClose() }}>Report</button>
                    <button className="cancel__button" onClick={() => setState(1)}>Cancel</button>
                </div>
            </div>
        )
    }

    return state === 1 ? userDetails(user) : reportPage();
}
export default UserDialog;
