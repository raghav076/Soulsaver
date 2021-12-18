import React, { useState, useEffect } from 'react';
import stateData from "../../constants/states";
import { bloodGP } from "../../constants/bloodGroups";
import './form.scss';

const Form = () => {
    // first name, last name, phone number, blood group, state, district
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');

    const [states, setStates] = useState(stateData.map((s) => s.state));
    const [districts, setDistricts] = useState([]);

    const [errors, setErrors] = useState({});

    useEffect(() => {
        setDistrict("");
        stateData.forEach(
            (data, idx) =>
                data.state === state && setDistricts(stateData[idx].districts)
        );
    }, [state]);

    const validateInput = () => {
        // validate firstName
        (firstName.length < 3 || firstName.length > 15) ? setErrors({ ...errors, firstName: true }) : setErrors({ ...errors, firstName: false });

        //validate lastName
        lastName.length > 15 ? setErrors({ ...errors, lastName: true }) : setErrors({ ...errors, lastName: false });

        //validate phone number 
        phone.length !== 10 ? setErrors({ ...errors, phone: true }) : setErrors({ ...errors, phone: false });

        //validate state
        !state ? setErrors({ ...errors, state: true }) : setErrors({ ...errors, state: false })
        
        //validate district
        !district ? setErrors({ ...errors, district: true }) : setErrors({ ...errors, district: false });

        //validate blood group
        !bloodGroup ? setErrors({ ...errors, bloodGroup: true }) : setErrors({ ...errors, bloodGroup: false });

        return false;
    }

    useEffect(() => {
        console.log(errors)
    }, [errors]);

    const submitForm = async (e) => {
        e.preventDefault();

        if (validateInput()) {
            const res = await fetch('http://localhost:4000/addrequest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    phoneNumber: phone,
                    bloodGroup: bloodGroup,
                    state: state,
                    district: district,
                })
            }).then((t) => t.json());
            alert(res.message);
        }
    }

    return (
        <form className="form__container" onSubmit={(e) => { submitForm(e) }}>
            <div>
                <label className="control-label">First Name:</label>
                <input
                    className="firstName input__field"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <div className="error">{errors.firstName&&<>Invalid First Name</>}</div>
            </div>
            <div>
                <label className="control-label">Last Name:</label>
                <input
                    className="lastName input__field"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div>
                <label className="control-label">Phone Number:</label>
                <input
                    className="phone input__field"
                    type="number"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div>
                <label className="control-label">Select State:</label>
                <select value={state} onChange={(e) => setState(e.target.value)}>
                    <option value="" selected disabled hidden>Select State</option>
                    {states.map((s) => <option value={s}>{s}</option>)}
                </select>
            </div>
            <div>
                <label className="control-label">Select District:</label>
                <select value={district} onChange={(e) => setDistrict(e.target.value)}>
                    <option value="" selected disabled hidden>Select District</option>
                    {districts.map((s) => <option value={s}>{s}</option>)}
                </select>
            </div>
            <div>
                <label className="control-label">Select Blood Group:</label>
                <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
                    <option value="" selected disabled hidden>Select Blood Group</option>
                    {bloodGP.map((s) => <option value={s}>{s}</option>)}
                </select>
            </div>
            <div>
                <button className="submit__button" type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Form;
