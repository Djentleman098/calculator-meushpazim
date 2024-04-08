import React, { useState, useEffect } from 'react';
import Data from './Data';
import './Zakaut.css';
import { useMediaQuery } from 'react-responsive';

const Zakaut = ({id}) => {

    const zakaut = Data.find(data => data.id === id);

    return (
    <div className="zakaut-container">
        <p>{zakaut.name}</p>
    </div>
    );
}

export default Zakaut;