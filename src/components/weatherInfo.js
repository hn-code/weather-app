import React, { useEffect, useState } from 'react'

export const WeatherInfo = ({weatherData}) => {

  const [animate, setAnimate] = useState(false)

  useEffect(()=>{
    setAnimate(true);
    setTimeout(()=>{
      setAnimate(false)
    }, 1500);
  },[weatherData.location.name])  

  return (
    <div className='weather_container'>
      <p className='weather_city'>{weatherData?.location.name}, {weatherData?.location.country}</p>
            <div className='weather_info'>
              <div className={`weather_icon_text ${animate ? 'animateFadeRight' : ''}`}>
                <img
                  src={weatherData?.current.condition.icon}
                  alt='icono estado del clima'
                  className='weather_icon' />
                <span>{weatherData?.current.condition.text}</span>
              </div>
              <span className={`weather_maintemperature ${animate ? 'animateFadeUp' : ''}`}>{weatherData?.current.temp_c}°C</span>
              <div className={`weather_flt_container ${animate ? 'animateFadeLeft' : ''}`}>
                <p>feels like</p>
                <span className='weather_feelsliketemperature'>{weatherData?.current.feelslike_c}°C</span>
              </div>
            </div>
            <div className={`weather_map_container ${animate ? 'animateFadeDown' : ''}`}>
              <iframe
                className='weather_map'
                src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d156929.94512389431!2d${weatherData?.location.lon}!3d${weatherData?.location.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1672472562166!5m2!1ses-419!2suy`}
                loading="lazy"
                title={weatherData?.location}>
              </iframe>
            </div>
          </div>
  )
}
