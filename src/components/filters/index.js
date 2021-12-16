import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';
import './filters.scss';


const Filters = ({ itemWidth, placeHolder, options, value, handleChange }) => {
        
    return (
        <div className='filter'>
            <Autocomplete
                className="filter__item"
                style={{ width: itemWidth }}
                value={value}
                onChange={(event, newValue) => {
                    handleChange(newValue);
                }}
                options={options}
                id="disable-close-on-select"
                renderInput={(params) => (
                    <TextField {...params} label={placeHolder} variant="standard" />
                )}
            />
        </div>
    )
}

Filters.propTypes = {
    itemWidth: PropTypes.number,
    placeHolder: PropTypes.string,
    options: PropTypes.array,
    value: PropTypes.string,
    handleChange: PropTypes.func,
}

Filters.defaultProps = {
    itemWidth: 150,
    placeHolder: 'select',
    options: ['a', 'b', 'c', 'd'],
    value: '',
    handleChange: ()=>{},
}

export default Filters;
