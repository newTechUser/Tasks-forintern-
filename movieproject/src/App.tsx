// App.tsx
import React, { useState } from 'react';
import Navbar from './component/Nav/Navbar';
import './App.css'
import Main from './component/Main/Main';
import Movies from './component/Movies/Movies';
import Shows from './component/Shows/Shows';
import FreeTrial from './component/FreeTrial/FreeTrial';
import Footer from './component/Footer/Footer';

function App() {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchInputChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <div className="App">
      <div className="container">
        {/* Pass the onSearchInputChange function as a prop to Navbar */}
        <Navbar onSearchInputChange={handleSearchInputChange} />
        <div className="Maincontent">
          <Main searchValue={searchValue} />
        </div>
        <div className="Movie">
          <Movies />
        </div>
        <div className="appshows">
          <Shows />
        </div>
        <div className="appfreetrial">
          <FreeTrial />
        </div>
      </div>
      <div className="appFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
