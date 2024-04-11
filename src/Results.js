import React, { useState, useEffect } from 'react';
import './Results.css';
import Zakaut from './Zakaut';
import Hatava from './Hatava';
import Data from './Data';
import Header from './Header';
import { useMediaQuery } from 'react-responsive';


const Results = ({changePage, hatavot, totalDays}) => {
    
    const zakauyotAmounts = [
        {id: 2, amount: 2635},
        {id: 3, amount: 5270},
        {id: 4, amount: (Math.floor(totalDays/30) * 11570) + ((totalDays % 30) * 380)},
        {id: 5, amount: (Math.floor(totalDays/30) * 11570) + ((totalDays % 30) * 380)},
        {id: 6, amount: 500},
        {id: 7, amount: 500},
        {id: 8, amount: 1800},
        {id: 9, amount: 5000},
        {id: 10, amount: 1000},
        {id: 11, amount: 5000},
    ];

    // toggle to show maanal or hatava
    const [showMaanak, setShowMaanak] = useState(true);

    const zakauyotFilter = Data.filter(data => data.type === 1 && hatavot.includes(data.id));
    const zakauyotAmountsFiltered = zakauyotAmounts.filter(zakaut => hatavot.includes(zakaut.id));
    const hatavotFilter = Data.filter(data => data.type === 2 && hatavot.includes(data.id));

    // calculate the amount
    let sumAmount = 0;
    for (let zakaut of zakauyotAmountsFiltered){
        if (typeof zakaut.amount === 'number')
            sumAmount += zakaut.amount;
    };

    return (
    <div className="results-container">
        <Header />
        <div className="results-summary">
            <h4 className="texts">לפי הנתונים שהוזנו אלה הזכויות שלך</h4>
            <h2 className="texts">{zakauyotFilter.length} מענקים בסך: {sumAmount.toLocaleString()} ₪</h2>
            <h2 className="texts">{hatavotFilter.length} הטבות נוספות</h2>
        </div>
        <div className="toggle-hatava">
            <button className={`toggle-hatava-button ${showMaanak === false ? 'active' : ''}`} onClick={() => {setShowMaanak(false)}}>הטבות נוספות</button>
            <button className={`toggle-hatava-button ${showMaanak === true ? 'active' : ''}`} onClick={() => {setShowMaanak(true)}}>מענקים</button>
        </div>

        {showMaanak &&
        <div className="results-list">
            {zakauyotFilter.length > 0 && zakauyotFilter.map(zakaut => (
                <Zakaut id={zakaut.id} amount={zakauyotAmountsFiltered.find(item => item.id === zakaut.id)}/>
            ))}           
        </div>}

        {showMaanak === false &&
        <div className="results-list">
            {hatavotFilter.length > 0 && hatavotFilter.map(hatava => (
                <Hatava id={hatava.id}/>
            ))}
        </div>}

        <div className="results-footer">
            <button className="return-button" onClick={changePage}>חזרה לדף הבית</button>
        </div>
    </div>
    );
}

export default Results;