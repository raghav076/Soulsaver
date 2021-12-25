import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Loading from '../loading';
import stateData from "../../constants/states";
import { bloodGP } from "../../constants/bloodGroups";
import { serverBaseURL } from '../../config';
import './form.scss';

const Form = ({type}) => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');

    
    const [states, setStates] = useState(stateData.map((s) => s.state));
    const [districts, setDistricts] = useState([]);
    
    //errors
    const [errFirstName, setErrFirstName] = useState();
    const [errLastName, setErrLastName] = useState();
    const [errPhone, setErrPhone] = useState();
    const [errBlood, setErrBlood] = useState();
    const [errState, setErrState] = useState();
    const [errDist, setErrDist] = useState();
    const [submitting, setSubmitting] = useState(false);

    let error = false;

    useEffect(() => {
        setDistrict("");
        stateData.forEach(
            (data, idx) =>
                data.state === state && setDistricts(stateData[idx].districts)
        );
    }, [state]);

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const validate = () => {
        
        if ((firstName.length < 3 || firstName.length > 15)) {
            setErrFirstName(true);
            error = true;
        }
        else setErrFirstName(false);

        if (lastName.length > 15) {
            setErrLastName(true);
            error = true;
        } else
            setErrLastName(false);

        if (phone < 9999999999 && phone > 1000000000)
            setErrPhone(false)
        else {
            setErrPhone(true);
            error = true;
        }
        
        if (!bloodGroup) {
            setErrBlood(true)
            error = true;
        }
        else setErrBlood(false);

        if (!state) {
            setErrState(true)
            error = true;
        } else setErrState(false);

        if (!district) {
            setErrDist(true)
            error = true;
        } else setErrDist(false);
    };
    
    const resetForm = () => { 
        setFirstName('');
        setLastName('');
        setPhone('');
        setBloodGroup('');
        setState('');
        setDistrict('');
    }

    const submitForm = async (e) => {
        e.preventDefault();
        validate();
        const endPoint = type === 'donor' ? 'addDonor' : 'addrequest';
        if (!error) {
            setSubmitting(true);
            const res = await fetch(`${serverBaseURL}/${endPoint}`, {
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
            resetForm();
            setSubmitting(false);
            alert(res.message);
        }
    }

    const tagLine = type === 'donor' ? 'Donate' : "Request";
        
    return (
        <Box
            className='form__container'
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="form__label"><h3>{tagLine} Blood</h3></div>
            <div className="form__row">
                <TextField
                    error={errFirstName}
                    value={firstName}
                    onChange={(e) => { setFirstName(e.target.value) }}
                    id="standard-error-helper-text"
                    label="First Name"
                    defaultValue=""
                    helperText="Min 3 characters"
                    variant="standard"
                />
                <TextField
                    error={errLastName}
                    value={lastName}
                    onChange={(e) => { setLastName(e.target.value) }}
                    id="standard-error-helper-text"
                    label="Last Name"
                    defaultValue=""
                    helperText="Max 15 characters"
                    variant="standard"
                />
            </div>
            <div className="form__row">
                <TextField
                    error={errPhone}
                    value={phone}
                    type="number"
                    onChange={(e) => { setPhone(e.target.value) }}
                    id="standard-error-helper-text"
                    label="Phone Name"
                    defaultValue=""
                    helperText="Enter Valid Phone Number"
                    variant="standard"
                />
                <TextField
                    error={errBlood}
                    id="standard-select-currency-native"
                    select
                    label="Select"
                      value={bloodGroup}
                      onChange={(e)=>setBloodGroup(e.target.value)}
                    helperText="Please select your Blood Group"
                    variant="standard"
                >
                    {bloodGP.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div className="form__row">
                <TextField
                    error={errState}
                    id="standard-select-currency-native"
                    select
                    label="Select"
                      value={state}
                      onChange={(e)=>setState(e.target.value)}
                    helperText="Please select your State"
                    variant="standard"
                >
                    {states.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    error={errDist}
                    id="standard-select-currency-native"
                    select
                    label="Select"
                      value={district}
                      onChange={(e)=>setDistrict(e.target.value)}
                    helperText="Please select your District"
                    variant="standard"
                >
                    {districts.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div className="form__submit">
                {!submitting ? <button onClick={(e) => submitForm(e)}>Submit</button>:<Loading />}
            </div>
        </Box>
    );
}
export default Form;


