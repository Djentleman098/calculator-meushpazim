    import React, { useState, useEffect } from 'react';
    import { useMediaQuery } from 'react-responsive';
    import './Calculator.css';
    import Header from './Header';
    import Logic from './Logic';
    const logic = Logic();

    const Calculator = ({changePage, totalDays}) => {

        // determains if the calculate buton will be clickable
        const [canCalculate, setCanCalculate] = useState(false);
        // progress bar
        const [progress, setProgress] = useState(0);

        const currentDate = new Date().toISOString().split('T')[0];

        const [formData, setFormData] = useState({
            sosh: null,
            specialHova: null,
            pgiaDate: null,
            maxPgiaLevel: null,
            didIshpuz: null,
            ishpuzStartDate: null,
            ishpuzEndDate: null,
            stillIshpuz: null,
            isMukar: null
        });

        // function to calculate the progress bar
        useEffect(() => {
            const calcProgress = () => {
                let amountOfQuestions, answeredQuestions;
                formData.didIshpuz === true ? (formData.sosh === 1 ? amountOfQuestions = 8 : amountOfQuestions = 7) : (formData.sosh === 1 ? amountOfQuestions = 5 : amountOfQuestions = 4);
                formData.sosh === 1 ? answeredQuestions = Object.values(formData).filter(value => value != null).length : answeredQuestions = Object.entries(formData).filter(([key, value]) => key !== 'specialHova' && value != null).length;
                setProgress((answeredQuestions/amountOfQuestions)*100*0.9);
            };

            calcProgress();
        }, [formData]);

        // check if all the questions are answered
        useEffect(() => {
            const checkFinished = () => {
                if (progress === 100*0.9)
                    setCanCalculate(true);
                else
                    setCanCalculate(false);
            };
            checkFinished();
        },[progress]);

        const handleSosh = (value) => {
            const newData = {
                ...formData,
                sosh: value
            };
            setFormData(newData);
        };

        const handleSpecialHova = (value) => {
            let setSpecialHova;
            if (formData.specialHova === null)
                setSpecialHova = false;
            else
                setSpecialHova = formData.specialHova;
            const newData = {
                ...formData,
                specialHova: setSpecialHova,
                specialHova: value
            };
            setFormData(newData);
        };

        const handlePgiaDate = (e) => {
            const newValue = e.target.value;
            const newData = {
                ...formData,
                pgiaDate: newValue
            };
            setFormData(newData);
        };

        const handleMaxPgiaLevel = (value) => {
            let setDidIshpuz;
            if (formData.didIshpuz === null)
                setDidIshpuz = false;
            else
                setDidIshpuz = formData.didIshpuz;
            const newData = {
                ...formData,
                didIshpuz: setDidIshpuz,
                maxPgiaLevel: value
            };
            setFormData(newData);
        };

        const handleDidIshpuz = (bool) => {
            let prevState = formData.didIshpuz;
            if (prevState === bool)
                return;
            const newData = {
                ...formData,
                didIshpuz: !prevState
            };
            setFormData(newData);
        };

        const handleIshpuzStartDate = (e) => {
            const newValue = e.target.value;
            const newData = {
                ...formData,
                ishpuzStartDate: newValue
            };
            setFormData(newData);
        };

        const handleIshpuzEndDate = (e) => {
            const newValue = e.target.value;
            const newData = {
                ...formData,
                stillIshpuz: null,
                ishpuzEndDate: newValue
            };
            setFormData(newData);
        };

        const handleStillIshpuz = (e) => {
            let newState;
            if (e.target.checked)
                newState = true;
            else
                newState = null;
            const newData = {
                ...formData,
                ishpuzEndDate: null,
                stillIshpuz: newState,
            };
            setFormData(newData);
        };

        const handleIsMukar = (value) => {
            const newData = {
                ...formData,
                isMukar: value
            };
            setFormData(newData);
        };

        const handleCalculate = () => {
            if (canCalculate){
                const hatavot = logic.calculate(formData);
                changePage(hatavot);
                // calculate how many days in ishpuz
                if (formData.ishpuzStartDate !== null && (formData.ishpuzEndDate !== null || formData.stillIshpuz !== null)) {
                    const startDate = new Date(formData.ishpuzStartDate);
                    const endDate = formData.stillIshpuz != null ? new Date() : new Date(formData.ishpuzEndDate);
                    // Calculate the difference in milliseconds
                    const differenceMs = endDate.getTime() - startDate.getTime();
                    // Convert milliseconds to days
                    const daysInIshpuz = Math.ceil(differenceMs / (1000 * 60 * 60 * 24)) + 1;
                    totalDays(daysInIshpuz);
                }
            }
        };

        return (
        <div className="calc-container">
            <Header />
            <div className="questions">
                <h2 className="texts">מחשבון זכויות פצועים</h2>
                <li className="li-text">המחשבון הינו סימולציה המחושבת לפי הנתונים המוזנים על ידך בלבד. הזכאות הסופית תחושב על פי המופיע ברישומים הרשמיים.</li>
                <li className="li-text">פצועים שנפצעו במסגרת שירותם בכוחות הבטחון (שאינם הצבא) יפנו ליחידתם לבירור זכאויות והטבות.</li>
                <li className="li-text">הזכויות המוצגות במחשבון רלוונטיות לפצועים בנסיבות מבצעיות בלבד.</li>
                <li className="li-text">במידה ואושפזת יותר מפעם אחת, תוכל לבחון את זכויותך על כל תקופה בנפרד.</li>
                <div className="question">
                    <h4 className="texts">בעת הפציעה מה היה סוג השירות שלך?</h4>
                    <div className="answer-buttons">
                        <button className={`answer-button ${formData.sosh === 1 ? 'clicked' : ''}`} onClick={() => handleSosh(1)}>חובה</button>
                        <button className={`answer-button ${formData.sosh === 2 ? 'clicked' : ''}`} onClick={() => handleSosh(2)}>קבע</button>
                        <button className={`answer-button ${formData.sosh === 3 ? 'clicked' : ''}`} onClick={() => handleSosh(3)}>מילואים</button>
                    </div>
                </div>
                {formData.sosh === 1 && 
                <div className="question">
                    <h4 className="texts">האם הנך עונה על אחד לפחות מן הקריטריונים הבאים:</h4>
                    <li className="li-text">מקבל הקלות ת"ש</li>
                    <li className="li-text">מקבל תשלומי משפחה</li>
                    <li className="li-text">בן למשפחה שכולה</li>
                    <li className="li-text">חייל בודד</li>
                    <li className="li-text">בן משפחה של נכה צה"ל</li>
                    <li className="li-text">בן למשפחה נפגעת פעולות איבה</li>
                    <div className="answer-buttons">
                        <button className={`answer-button ${formData.specialHova === true ? 'clicked' : ''}`} onClick={() => handleSpecialHova(true)}>כן</button>    
                        <button className={`answer-button ${formData.specialHova === false ? 'clicked' : ''}`} onClick={() => handleSpecialHova(false)}>לא</button>
                    </div>
                </div>}
                {formData.sosh !== null &&
                <div>
                    <h4 className="texts">תאריך הפציעה</h4>
                    <input className="date-input" type="date" value={formData.pgiaDate || ''} onChange={handlePgiaDate} max={currentDate} min={'2023-10-07'}/>
                </div>}
                {formData.sosh !== null && formData.pgiaDate !== null &&
                <div className="question">
                    <h4 className="texts">מה היתה דרגת הפציעה המקסימלית שלך?</h4>
                    <div className="answer-buttons">
                        <button className={`answer-button ${formData.maxPgiaLevel === 3 ? 'clicked' : ''}`} onClick={() => handleMaxPgiaLevel(3)}>קשה ומעלה</button>
                        <button className={`answer-button ${formData.maxPgiaLevel === 2 ? 'clicked' : ''}`} onClick={() => handleMaxPgiaLevel(2)}>בינוני</button>
                        <button className={`answer-button ${formData.maxPgiaLevel === 1 ? 'clicked' : ''}`} onClick={() => handleMaxPgiaLevel(1)}>קל</button>
                    </div>
                </div>}
                {formData.sosh !== null && formData.pgiaDate !== null && formData.maxPgiaLevel !== null &&
                <div className="question">
                    <h4 className="texts">האם אושפזת? (לא כולל אשפוז יום)</h4>
                    <div className="toggle-switch">
                        <button className={`toggle-button ${formData.didIshpuz === true ? 'active' : ''}`} onClick={() => handleDidIshpuz(true)}>כן</button>
                        <button className={`toggle-button ${formData.didIshpuz === false || formData.didIshpuz === null ? 'active' : ''}`} onClick={() => handleDidIshpuz(false)}>לא</button>
                    </div>
                </div>}
                {formData.sosh !== null && formData.pgiaDate !== null && formData.maxPgiaLevel !== null && formData.didIshpuz === true &&
                <div>
                    <h4 className="texts">תאריך תחילת אשפוז</h4>
                    <input className="date-input" type="date" value={formData.ishpuzStartDate || ''} onChange={handleIshpuzStartDate} max={currentDate} min={formData.pgiaDate}/>
                </div>}
                {formData.sosh !== null && formData.pgiaDate !== null && formData.maxPgiaLevel !== null && formData.didIshpuz === true && formData.ishpuzStartDate !== null &&
                <div>
                    <h4 className="texts">תאריך שחרור מאשפוז</h4>
                    <div className="still-ishpuz-container">
                        <div className="still-ishpuz">
                            <label className="still-ishpuz-label" htmlFor="stillIshpuz">עדיין מאושפז</label>
                            <input className="still-ishpuz-input" type="checkbox" onChange={handleStillIshpuz} checked={formData.stillIshpuz === true}/>
                        </div>
                        <div>
                            <input className="date-input" type="date" value={formData.ishpuzEndDate || ''} onChange={handleIshpuzEndDate} max={currentDate} min={formData.ishpuzStartDate}/>
                        </div>
                    </div>
                </div>}
                {formData.sosh !== null && formData.pgiaDate !== null && formData.maxPgiaLevel !== null && formData.didIshpuz === true && formData.ishpuzStartDate !== null && (formData.stillIshpuz !== null || formData.ishpuzEndDate !== null) &&
                <div className="question">
                    <h4 className="texts">האם קיבלת הכרה לנכות ממשרד הבטחון?</h4>
                    <div className="answer-buttons">
                        <button className={`answer-button ${formData.isMukar === 4 ? 'clicked' : ''}`} onClick={() => handleIsMukar(4)}>לא ידוע</button>
                        <button className={`answer-button ${formData.isMukar === 3 ? 'clicked' : ''}`} onClick={() => handleIsMukar(3)}>בתהליך</button>
                        <button className={`answer-button ${formData.isMukar === 2 ? 'clicked' : ''}`} onClick={() => handleIsMukar(2)}>כן</button>
                        <button className={`answer-button ${formData.isMukar === 1 ? 'clicked' : ''}`} onClick={() => handleIsMukar(1)}>לא</button>
                    </div>
                </div>}
            </div>
            <div className="footer">
                <div className="progress-container">
                    <div className="progress-background"></div>
                    <div className="progress-bar" style={{width: `${progress}%`}}></div>
                </div>
                <button className={`calc-button ${canCalculate ? 'on' : 'off'}`} onClick={handleCalculate}>חשב זכאות</button>
            </div>
        </div>
        );
    }

    export default Calculator;
