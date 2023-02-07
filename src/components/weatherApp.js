import React, { useEffect, useState } from 'react';
import './weatherApp.css';
import { WeatherForm } from './weatherForm';
import { WeatherInfo } from './weatherInfo';

export const WeatherApp = () => {

  const [weatherData, setWeatherData] = useState(false);
  const [cityWrited, setCityWrited] = useState('');
  const [city, setCity] = useState("Maldonado");

  useEffect(()=>{
    const cityPreSearched = sessionStorage.getItem("cityWrited")
    if(cityPreSearched && cityPreSearched.toLocaleLowerCase !== "maldonado"){
      setCity(cityPreSearched);
    }
  },[])

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const req = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`)
        const json = await req.json();
        if (!json.error) {
          setWeatherData(json);
        }
      } catch (error) {
        console.log(error);
      }
    }
    loadWeather();
  }, [city])

  useEffect(() => {
    weatherData 
    ? document.title = `Weather | ${weatherData.location.name}`  
    : document.title = `Weather | WeatherApp`
  }, [weatherData])
  


  const onHandleChange = (e) => {
    const cityInInput = e.target.value;
    setCityWrited(cityInInput);
  }

  const searchCity = (e) => {
    e.preventDefault();
    sessionStorage.setItem("cityWrited", cityWrited)
    setCity(cityWrited);
  }

  return (
    <div className='weather_main_container'>
      <WeatherForm onHandleChange={onHandleChange} searchCity={searchCity}/>
      {
        weatherData
          ?
          <WeatherInfo weatherData={weatherData}/>
          :
          <div className='loading-logo_container'>
            <img
              src={'/loading-logo.png'}
              alt="loading logo"
              className='loading-logo' />
          </div>
      }
    </div>

  )
}
