import React, {useState} from 'react'
import WeatherIcon from './WeatherIcon';
import './WeatherApp.css'

//Third Party JS
import Moment from 'react-moment'; //Date Generator


const api = {
    key: '78a4a50a909b4a23f6c8b029b50c0020',
    url: 'https://api.openweathermap.org/data/2.5/'
  }

function WeatherApp() {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});

    //Search for Weather Info Based on Query
    const search = evt => {
        if (evt.key === "Enter") {
          fetch(`${api.url}weather?q=${query}&units=metric&appid=${api.key}`)
            .then(res  => res.json())
            .then(result => {
              setWeather(result);
              setQuery('');
            });
        }
      }

      return (
        <main className="weather-app-container">
          {/* If weather.main is not undefined and temp is greater than 10 Celsius, return app warm class; if not greater than 10, return just app;  */}
          <div className={(typeof weather.main != "undefined") 
            ? ((weather.main.temp > 10)
              ? 'app warm'
              : 'app')
            : 'weather'}>
          
            <div className="search-box">
              <input 
                type="text"
                className="search-bar"
                placeholder="search"
                onChange = {e => setQuery(e.target.value)} //As user types, setQuery will change the query value
                value = {query}
                onKeyPress = {search} //Will trigger search if the event is enter
                required
              />
            </div>
    
            {(typeof weather.main != "undefined") ? (
              <div className="container">
                <div className="location-box">
                  <div className="location">
                    {weather.name}, {weather.sys.country}
                  </div>
    
                  <div className="date">
                    {/* <Moment format="ddd, MMM DD YYYY"></Moment> */}
                    <Moment format="ddd, MMM DD YYYY"></Moment>
                  </div>
    
                  <div className="weather-box">
                    <div className="temp">
                      {Math.round(weather.main.temp)}&#176;c
                      <WeatherIcon />
                    </div>
                    <div className="weather">
                      {weather.weather[0].main}
                    </div>

                    <div className="weather-range">
                        <div className="min-weather">
                            Low: {Math.round(weather.main.temp_min)}&#176;c
                        </div>
                        <div className="max-weather">
                            High: {Math.round(weather.main.temp_max)}&#176;c
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : ('') }    
              </div>
            </main>    
      );
    }

export default WeatherApp;
