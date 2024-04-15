import React, { useState, useEffect } from 'react';
import Calculator from './Calculator';
import Results from './Results';
import { useMediaQuery } from 'react-responsive';
import './App.css';

function App() {

  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  const [page, setPage] = useState('calculator');
  const [hatavot, setHatavot] = useState(null);
  const [previousFormData, setPreviousFormData] = useState(null);
  const [days, setDays] = useState(0);

    // Scroll to the top when page changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [page]);

  // passes the hatavot from calculator to results page
  const handlePageChange = (hatavot, formData) => {
    setHatavot(hatavot);
    setPreviousFormData(formData);
    if (page === 'calculator'){
      setPage('results');
    } else
      setPage('calculator');

  };

  // passes the total days in ishpuz from calculator to results page
  const setTotalDays = (total) => {
    setDays(total);
  };

  return (
    <div className="App">
      {page === 'calculator' && <Calculator changePage={handlePageChange} formData={previousFormData} totalDays={setTotalDays}/>}
      {page === 'results' && <Results changePage={handlePageChange} hatavot={hatavot} formData={previousFormData} totalDays={days}/>}
    </div>
  );
}

export default App;
