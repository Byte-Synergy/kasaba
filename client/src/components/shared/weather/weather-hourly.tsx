'use client'
import { useWeatherStore } from '@/hooks/useWeather'
import { formatTime } from '@/utils/formatDate'
import { Cloudy } from 'lucide-react'
import React from 'react'

const WeatherHourly = () => {
    const { hourly } = useWeatherStore()

    return (
        <ul className='min-md:w-xl flex gap-x-8 p-3 bg-[#f9f9f9] rounded-2xl overflow-x-auto text-[#051769] max-md:overflow-scroll'>
            {
                hourly?.time.map((i: any, idx: number) => {
                    const hour = formatTime(i)
                    const temperature = hourly.temperature_2m[idx];

                    return (
                        <li className=''>
                            <h5 className='font-medium'>{hour}</h5>
                            <p className='my-1 text-lg'>{temperature}°C</p>
                            <Cloudy className='w-6 h-6 text-[#29303f]' />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default WeatherHourly
