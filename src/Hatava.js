import React, { useState, useEffect } from 'react';
import Data from './Data';
import './Hatava.css';
import { useMediaQuery } from 'react-responsive';

const Hatava = ({id}) => {

    const hatava = Data.find(data => data.id === id);

    return (
    <div className="hatava-container">
        <p>{hatava.name}</p>
    </div>
    );
}

export default Hatava;