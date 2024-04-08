import React, { useState, useEffect } from 'react';
import Zakaut from './Zakaut';
import Hatava from './Hatava';
import Data from './Data';
import { useMediaQuery } from 'react-responsive';

const Results = ({changePage, hatavot}) => {

    const zakauyotFilter = Data.filter(data => data.type === 1 && hatavot.includes(data.id));
    const hatavotFilter = Data.filter(data => data.type === 2 && hatavot.includes(data.id));
    console.log(zakauyotFilter);

    return (
    <div>
        <button onClick={changePage}>Return</button>
        <p>זכויות</p>
        {zakauyotFilter.length > 0 && zakauyotFilter.map(zakaut => (
            <Zakaut id={zakaut.id}/>
        ))}
        <p>הטבות</p>
        {hatavotFilter.length > 0 && hatavotFilter.map(hatava => (
            <Hatava id={hatava.id}/>
        ))}
    </div>
    );
}

export default Results;