import React, { useState, useEffect } from 'react';
import Data from './Data';
import './Zakaut.css';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { useMediaQuery } from 'react-responsive';

const Zakaut = ({id}) => {

    const [expanded, setExpanded] = useState(false);

    const zakaut = Data.find(data => data.id === id);

    return (
    <div className="zakaut-container">
        <div className="zakaut-header">
            <div className={`expand-icon ${expanded ? 'expanded' : ''}`} onClick={() => {setExpanded(!expanded)}}>
                <ExpandCircleDownOutlinedIcon />
            </div>            
            <h3 className="texts">{zakaut.name}</h3>
        </div>
        {expanded && 
        <p className="texts">{zakaut.text}</p>}
    </div>
    );
}

export default Zakaut;