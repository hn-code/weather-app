import React from 'react'

export const WeatherInfo = ({weatherData}) => {
  return (
    <div className='weather_container'>
            <div className='weather_info'>
              <div className='weather_icon_text'>
                <img
                  src={weatherData?.current.condition.icon}
                  alt='icono estado del clima'
                  className='weather_icon' />
                <span>{weatherData?.current.condition.text}</span>
              </div>
              <span className='weather_maintemperature'>{weatherData?.current.temp_c}°C</span>
              <div className='weather_flt_container'>
                <p>feels like</p>
                <span className='weather_feelsliketemperature'>{weatherData?.current.feelslike_c}°C</span>
              </div>
            </div>
            <div>
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d156929.94512389431!2d${weatherData?.location.lon}!3d${weatherData?.location.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2suy!4v1672472562166!5m2!1ses-419!2suy`}
                width="450"
                height="450"
                loading="lazy"
                title={weatherData?.location}>
              </iframe>
            </div>
          </div>
  )
}
