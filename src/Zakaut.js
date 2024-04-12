import React, { useState, useEffect } from 'react';
import Data from './Data';
import './Zakaut.css';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { useMediaQuery } from 'react-responsive';

const Zakaut = ({id, amount}) => {

    const [expanded, setExpanded] = useState(false);
    const [extraExpand, setExtraExpand] = useState(false);

    const zakaut = Data.find(data => data.id === id);

    console.log(amount);

    return (
    <div className="zakaut-container">
        <div className="zakaut-header"> 
            <div className={`expand-icon ${expanded ? 'expanded' : ''}`} onClick={() => {setExpanded(!expanded)}}>
                <ExpandCircleDownOutlinedIcon />
            </div>            
            <h3 className="text-zakaut-header">{zakaut.name}</h3>
        </div>
        {amount && amount.amount !== null &&
        <div className="zakaut-amount">
            <span className="amount-zakaut">₪ {amount.amount.toLocaleString()}</span>
            <p className="text-zakaut">גובה ההטבה</p>
        </div>}
        {expanded && 
            <div className="texts" dangerouslySetInnerHTML={{ __html: zakaut.text }} />}
        {expanded && zakaut.extraText !== null &&
            <p className="extra-text" onClick={() => {setExtraExpand(!extraExpand)}}>פירוט נוסף</p>}
        {expanded && extraExpand &&
            <div className="texts" dangerouslySetInnerHTML={{ __html: zakaut.extraText }} />}
    </div>
    );
}

export default Zakaut;