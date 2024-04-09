import React, { useState, useEffect } from 'react';
import Data from './Data';
import './Hatava.css';
import { useMediaQuery } from 'react-responsive';

const Hatava = ({id}) => {

    const hatava = Data.find(data => data.id === id);

    return (
    <div className="hatava-container">
        <h3 className="texts">{hatava.name}</h3>
    </div>
    );
}

export default Hatava;