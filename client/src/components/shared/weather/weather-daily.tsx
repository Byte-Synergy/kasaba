'use client'
import { useWeatherStore } from '@/hooks/useWeather';
import { formatDateToWeekday } from '@/utils/formatDate';
import { CloudSun } from 'lucide-react';
import React from 'react'

const WeatherDaily = () => {
    const { daily } = useWeatherStore();

    return (
        <div className="mt-4 text-center text-gray-700 p-3 px-0 bg-[#f9f9f9] rounded-2xl ">
            {/* <h3 className='text-xl '>Haftalik ob-havo</h3> */}
            <ul className="relative h-36 flex flex-col flex-wrap gap-y-2 gap-x-0 after:absolute after:w-[1px] after:h-full after:content-[''] after:top-0 after:left-1/2 after:bg-[#e7e7e7] max-md:flex-nowrap max-md:after:hidden max-md:h-full">
                {
                    daily?.time.map((i: any, idx: number) => {
                        const weekday = formatDateToWeekday(new Date(i));
                        const temperature = daily.temperature_2m_max[idx];

                        return (
                            <li className='w-1/2 flex justify-evenly items-center max-md:w-full'>
                                <p>{weekday}</p>
                                <div className='flex items-center gap-x-1'>
                                    <CloudSun className='w-6 h-6' />
                                    <b className='text-xl'>{temperature}°C</b>
                                </div>
                            </li>
                        )
                    }
                    )
                }
            </ul>
        </div>
    )
}

export default WeatherDaily
