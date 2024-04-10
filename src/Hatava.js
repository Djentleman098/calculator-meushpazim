import React, { useState, useEffect } from 'react';
import Data from './Data';
import './Zakaut.css';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

const Hatava = ({id}) => {

    const [expanded, setExpanded] = useState(false);

    const hatava = Data.find(data => data.id === id);

    return (
    <div className="zakaut-container">
        <div className="zakaut-header"> 
            <div className={`expand-icon ${expanded ? 'expanded' : ''}`} onClick={() => {setExpanded(!expanded)}}>
                <ExpandCircleDownOutlinedIcon />
            </div>            
            <h3 className="text-zakaut-header">{hatava.name}</h3>
        </div>
        {expanded && 
        <p className="texts">{hatava.text}</p>}
    </div>
    );
}

export default Hatava;