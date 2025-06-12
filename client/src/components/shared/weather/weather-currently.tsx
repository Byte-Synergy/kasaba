'use client'
import { useWeatherStore } from '@/hooks/useWeather'
import { formatDateToWeekday } from '@/utils/formatDate'
import { Sun } from 'lucide-react'
import React from 'react'

const WeatherCurrently = () => {
    const {selectedRegion, current} = useWeatherStore()

    return (
        <div className='flex items-center justify-between mb-4 max-md:flex-col max-md:items-start'>
            <div className='w-3/4'>
                <div className=''>
                    <h3 className='text-xl font-bold'>{selectedRegion}</h3>
                    <p className='text-sm font-medium'>{formatDateToWeekday(current?.time)}</p>
                </div>
                <h1 className='text-7xl font-bold mt-2 text-[#FF8400]'>{current?.temperature} °C</h1>
            </div>
            <div className='w-1/4'>
                <Sun className='w-36 h-36 float-end' />
            </div>
        </div>
    )
}

export default WeatherCurrently
