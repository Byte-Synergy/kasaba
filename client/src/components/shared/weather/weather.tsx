import React, { Fragment } from 'react'
import WeatherHeader from './weather-header'
import WeatherCurrently from './weather-currently'
import WeatherHourly from './weather-hourly'
import WeatherDaily from './weather-daily'
import WeatherRegions from './weather-regions'

const Weather = () => {
  return (
    <Fragment>
        <WeatherHeader />
        {/* body */}
        <div className='flex items-start gap-x-4 max-md:flex-col-reverse'>
            {/* weather information */}
            <div className='w-5/6 flex flex-col max-md:w-full'>
                <WeatherCurrently />
                <WeatherHourly />
                <WeatherDaily />
            </div>
            <div className='w-5/6 p-3 bg-[#f9f9f9] rounded-xl max-md:w-full'>
                <WeatherRegions />
            </div>
        </div>
    </Fragment>
  )
}

export default Weather
