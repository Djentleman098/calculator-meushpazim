import React, { useState, useEffect } from 'react';
import Data from './Data';
import './Hatava.css';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

const Hatava = ({id}) => {

    const [expanded, setExpanded] = useState(false);

    const hatava = Data.find(data => data.id === id);

    return (
    <div className="hatava-container">
        <div className="hatava-header">
            <div className={`expand-icon ${expanded ? 'expanded' : ''}`} onClick={() => {setExpanded(!expanded)}}>
                <ExpandCircleDownOutlinedIcon />
            </div>
            <h3 className="texts">{hatava.name}</h3>
        </div>
        {expanded && 
        <p className="texts">{hatava.text}</p>}
    </div>
    );
}

export default Hatava;