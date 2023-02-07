import React from 'react'

export const WeatherForm = ({onHandleChange, searchCity}) => {
  return (
    <form className='formSearchCity'>
        <input placeholder='City, Region, Country' onChange={onHandleChange} />
        <button type='submit' onClick={searchCity}>Search</button>
      </form>
  )
}
