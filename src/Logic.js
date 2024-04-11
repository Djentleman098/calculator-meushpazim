import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const Logic = () => {

    // sosh/pgia 0 means all, otherwise according to the calculator file
    const hatavot = [
        {id: 1, sosh: 0, pgia: 0, ishpuz: true, days: null, stillIshpuz: null, tash: null, hakara: 0, group: null},
        {id: 2, sosh: 0, pgia: 1, ishpuz: true, days: null, stillIshpuz: null, tash: null, hakara: 0, group: 'hozaot'},
        {id: 3, sosh: 0, pgia: [2,3], ishpuz: true, days: null, stillIshpuz: null, tash: null, hakara: 0, group: 'hozaot'},
        {id: 4, sosh: 0, pgia: 1, ishpuz: true, days: null, stillIshpuz: null, tash: null, hakara: 0, group: 'calcala'},
        {id: 5, sosh: 0, pgia: [2,3], ishpuz: true, days: null, stillIshpuz: null, tash: null, hakara: 0, group: 'calcala'},
        {id: 6, sosh: 0, pgia: [2,3], ishpuz: true, days: null, stillIshpuz: true, tash: null, hakara: 0, group: 'goodies'},
        {id: 7, sosh: 0, pgia: 1, ishpuz: true, days: 3, stillIshpuz: true, tash: null, hakara: 0, group: 'goodies'},
        {id: 8, sosh: 0, pgia: 0, ishpuz: true, days: null, stillIshpuz: null, tash: null, hakara: 0, group: null},
        {id: 9, sosh: 0, pgia: [2,3], ishpuz: true, days: null, stillIshpuz: true, tash: null, hakara: 0, group: 'tavim'},
        {id: 10, sosh: 0, pgia: 1, ishpuz: true, days: null, stillIshpuz: true, tash: false, hakara: 0, group: 'tavim'},
        {id: 11, sosh: 1, pgia: 1, ishpuz: true, days: null, stillIshpuz: true, tash: true, hakara: 0, group: 'tavim'},

        {id: 12, sosh: 0, pgia: 0, ishpuz: null, days: null, stillIshpuz: null, tash: null, hakara: 0, group: null},
        {id: 13, sosh: 0, pgia: 0, ishpuz: null, days: null, stillIshpuz: null, tash: null, hakara: 0, group: null},
        {id: 14, sosh: [1,2], pgia: 0, ishpuz: true, days: null, stillIshpuz: null, tash: null, hakara: 0, group: 'siyau'},
        {id: 15, sosh: 3, pgia: 0, ishpuz: null, days: null, stillIshpuz: null, tash: null, hakara: 0, group: 'siyau'},
        {id: 16, sosh: 0, pgia: 0, ishpuz: null, days: null, stillIshpuz: null, tash: null, hakara: 0, group: null},
        {id: 17, sosh: 1, pgia: 0, ishpuz: null, days: null, stillIshpuz: null, tash: null, hakara: [1, 3, 4], group: null},
        {id: 18, sosh: 0, pgia: 0, ishpuz: null, days: null, stillIshpuz: null, tash: null, hakara: 0, group: null},
        {id: 19, sosh: 0, pgia: 0, ishpuz: null, days: null, stillIshpuz: null, tash: null, hakara: 2, group: null},
];

    const calculate = (data) => {
        let relevantHatavot = [];
        for (let hatava of hatavot){
            let shouldEnter = true;
            // check sosh
            if (Array.isArray(hatava.sosh)){
                if (!hatava.sosh.includes(data.sosh))
                    shouldEnter = false;
            } else {
                if (hatava.sosh !== 0 && hatava.sosh !== data.sosh)
                    shouldEnter = false;
            }
            // check pgia
            if (Array.isArray(hatava.pgia)){
                if (!hatava.pgia.includes(data.maxPgiaLevel))
                    shouldEnter = false;
            } else {
                if (hatava.pgia !== 0 && hatava.pgia !== data.maxPgiaLevel)
                    shouldEnter = false;
            }
            // check is ishpuz
            if (hatava.ishpuz !== null && hatava.ishpuz !== data.didIshpuz)
                shouldEnter = false;
            // check days
            let ishpuzDays;
            if (data.stillIshpuz){
                const currentDate = new Date();
                const ishpuzStartDate = new Date(data.ishpuzStartDate);
                ishpuzDays = Math.ceil((currentDate - ishpuzStartDate) / (1000 * 60 * 60 * 24)) + 1;
            } else {
                const ishpuzStartDate = new Date(data.ishpuzStartDate);
                const ishpuzEndDate = new Date(data.ishpuzEndDate);
                ishpuzDays = Math.ceil((ishpuzEndDate - ishpuzStartDate) / (1000 * 60 * 60 * 24)) + 1;
            }
            if (hatava.days !== null && hatava.days > ishpuzDays)
                shouldEnter = false;
            //check still ishpuz
            if (hatava.stillIshpuz !== null && hatava.stillIshpuz !== data.stillIshpuz)
                shouldEnter = false;
            // check tash
            if (data.sosh === 1 && hatava.tash !== null && hatava.tash !== data.specialHova)
                shouldEnter = false;
            // check hakara
            if (Array.isArray(hatava.hakara)){
                if (!hatava.hakara.includes(data.isMukar))
                    shouldEnter = false;
            } else {
                if (hatava.hakara !== 0 && hatava.hakara !== data.isMukar)
                    shouldEnter = false;
            }
            // enter the hatava if relevant
            if (shouldEnter)
                relevantHatavot.push(hatava.id);
        }
        return relevantHatavot;
    };

    return {
        calculate,
    };
}

export default Logic;