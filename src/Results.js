import React, { useState, useEffect } from 'react';
import './Results.css';
import Zakaut from './Zakaut';
import Hatava from './Hatava';
import Data from './Data';
import { useMediaQuery } from 'react-responsive';
import HeaderImage from './img/idf-header.png';


const Results = ({changePage, hatavot}) => {

    const [showMaanak, setShowMaanak] = useState(true);

    const zakauyotFilter = Data.filter(data => data.type === 1 && hatavot.includes(data.id));
    const hatavotFilter = Data.filter(data => data.type === 2 && hatavot.includes(data.id));

    let totalAmount = 0;
    for (let zak of zakauyotFilter){
        totalAmount += zak.amount;
    }
    for (let hat of hatavotFilter){
        totalAmount += hat.amount;
    }
    
    const handleWhatToShow = () => {
        const prevState = showMaanak;
        setShowMaanak(!prevState);
    };

    return (
    <div className="results-container">
        <div className="header">
            <img src={HeaderImage} alt={"Header"} className="header-image"/>
        </div>
        <div className="results-summary">
            <h4 className="texts">לפי הנתונים שהוזנו אלה הזכויות שלך</h4>
            <h2 className="texts">{zakauyotFilter.length} מענקים בסך: {totalAmount} ₪</h2>
            <h2 className="texts">{hatavotFilter.length} הטבות נוספות</h2>
        </div>
        <div className="toggle-hatava">
            <button className={`toggle-hatava-button ${showMaanak === true ? 'active' : ''}`} onClick={handleWhatToShow}>מענקים</button>
            <button className={`toggle-hatava-button ${showMaanak === false ? 'active' : ''}`} onClick={handleWhatToShow}>הטבות נוספות</button>
        </div>

        {showMaanak &&
        <div>
            <p>זכויות</p>
            {zakauyotFilter.length > 0 && zakauyotFilter.map(zakaut => (
                <Zakaut id={zakaut.id}/>
            ))}           
        </div>}

        {showMaanak === false &&
        <div>
            <p>הטבות</p>
            {hatavotFilter.length > 0 && hatavotFilter.map(hatava => (
                <Hatava id={hatava.id}/>
            ))}
        </div>}

        <div className="footer">
            <button className="return-button" onClick={changePage}>חזרה לדף הבית</button>
        </div>
    </div>
    );
}

export default Results;