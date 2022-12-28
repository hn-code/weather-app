import React, { useEffect, useState } from 'react';

export const Weather = () => {

  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("Maldonado");

  const API_KEY = "ffd228f2713d4874b6124250222812";


  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
      .then(res => res.json()
        .then(res => console.log(res.current.condition)))
  },[])

  return (
    <div></div>
    
  )
}
