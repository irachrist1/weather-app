import logo from './logo.svg';
import './App.css';
import { useState } from "react";

const api = {
  key: "a8db55248c760a4b0df4b6a16735d51a",
  base: "https://api.openweathermap.org/data/2.5/",
};

// ... (previous imports and code)

function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] =  useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER */}
        <h1>Weather</h1>

        {/* Search Box */}
        <div>
          <input 
            type="text" 
            placeholder="Enter City..." 
            onChange={(e) => setSearch(e.target.value)} 
          />
        
          <button onClick={searchPressed}>Search</button>
        </div>

        {/* Display weather information if available */}
        {weather.name && weather.main && weather.weather && (
          <div>
            {/* Location */}
            <p>{weather.name}</p>
            {/* Temperature F/C */}
            <p>{weather.main.temp} °C</p>
            {/* Condition */}
            <div>
              <p>{weather.weather[0].main}</p>
              <p>({weather.weather[0].description})</p>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}



export default App;
