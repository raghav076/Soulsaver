import React from 'react';
import { useLocation } from 'react-router';
import Header from '../../components/header';

const Support = () => {
    
    const {state} = useLocation();

    return (
        <Header />
    )
}

export default Support;
