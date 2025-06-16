'use client';
import { useModalStore } from '@/hooks/useModal';
import { useWeatherStore } from '@/hooks/useWeather';
import { useTranslations } from '@/utils/translation-provider';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect } from 'react';

const WeatherHeader = () => {
    const { current, selectedRegion, fetchWeatherByCoordinates } = useWeatherStore();
    const {openModal} = useModalStore()
    const t = useTranslations()

    const getGeolocationWeather = async () => {

        await navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                if (!current) {
                    fetchWeatherByCoordinates(
                        Number(latitude),
                        Number(longitude)
                    );
                }
            },
            (error) => {
                console.error("❌ Geolocation error:", error);
            }
        );
    };

    useEffect(() => {
        getGeolocationWeather();
    });

    return (
        <button type='button' onClick={() => openModal("weather")} className='inline-flex items-center justify-start gap-x-0 max-md:p-0 max-md:flex-row-reverse max-md:bg-[#ffffff31] max-md:rounded-3xl max-md:px-2 max-md:border-1 max-md:border-[#ffffff4e]' role='button'>
            <div className='w-12 h-12 flex items-center justify-center rounded-full max-md:w-9 max-md:h-9 max-md:bg-transparent max-md:border-transparent max-md:p-0'>
                <Image
                    src='/icon/weather.svg'
                    alt='weather icon'
                    width={28}
                    height={28}
                    objectFit='contain'
                />
            </div>
            <div className='inline-flex flex-col max-md:flex-row-reverse max-md:items-center max-md:gap-2'>
                <span className='inline-flex text-white text-sm font-bold '>{current?.temperature} °C</span>
                <div className=' inline-flex justify-start items-center gap-x-1 max-md:flex-row-reverse'>
                    <span className='justify-start text-white text-sm font-medium leading-none'>{t(`regions.${selectedRegion}`)}</span>
                    <ChevronDown className='justify-start text-white w-4 h-4 font-medium leading-none' />
                </div>
            </div>
        </button>
    );
};

export default WeatherHeader;
