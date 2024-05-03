import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Main() {
  const [inputValue, setInputValue] = useState('');
  const [apiData, setApiData] = useState(null);
    const[tempdata,settempdata] = useState(null)
    const [tempratur,settempratur] = useState()

  useEffect(() => {
    if (inputValue !== '') {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    fetch()
  }, [tempdata]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&appid=4dda0268e2b7967f6548fa9c0bf42aa0`);
      setApiData((response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetch = async (lon,lat) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4dda0268e2b7967f6548fa9c0bf42aa0`);
      settempdata((response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleButtonClick = () => {
    fetchData();
    let lon = apiData.lon;
    let lat = apiData.lat
    fetch(lon,lat)
    settempratur(tempdata);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter something..." 
      />
      <button onClick={handleButtonClick}>Fetch Data</button>
      [tempratur]
    </div>
  );
}

export default Main;
