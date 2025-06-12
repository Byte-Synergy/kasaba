'use client';
import { useWeatherStore } from '@/hooks/useWeather';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

const WeatherHeader = () => {
    const { current, selectedRegion } = useWeatherStore();

    return (
        <div className='inline-flex items-center justify-start gap-x-2 max-md:p-0 max-md:flex-row-reverse max-md:bg-blue-700 max-md:rounded-3xl max-md:px-2  max-md:border-white/10 max-md:backdrop-blur-[10px]' role='button'>
            <div className='w-9 h-9 flex items-center justify-center p-2 rounded-full border-2 border-[#ffffff4e] bg-[#ffffff4e] max-md:w-10 max-md:h-10 max-md:bg-transparent max-md:border-transparent max-md:p-0'>
                <Image
                    src='/icon/weather.svg'
                    alt='weather icon'
                    width={24}
                    height={24}
                    objectFit='contain'
                />
            </div>
            <div className='inline-flex flex-col max-md:flex-row-reverse max-md:items-center max-md:gap-2'>
                <div className='row-span-1 col-span-1'>
                    <span className='text-white text-sm font-bold '>{current?.temperature} </span>
                    <span className='text-white text-sm font-normal'>°C</span>
                </div>
                <div className='row-span-1 col-span-1 inline-flex justify-start items-center gap-x-1 max-md:flex-row-reverse'>
                    <span className='justify-start text-white/50 text-sm font-bold leading-none'>{selectedRegion}</span>
                    <ChevronDown className='justify-start text-white/50 w-4 h-4 font-medium leading-none' />
                </div>
            </div>
        </div>
    )
}

export default WeatherHeader
