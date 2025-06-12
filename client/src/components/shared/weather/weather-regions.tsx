'use client';
import { useWeatherStore } from '@/hooks/useWeather';
import { cn } from '@/libs/utils';
import React from 'react'

const regions = [
    { id: 'tashkent', region: 'Toshkent' },
    { id: 'andijan', region: 'Andijon' },
    { id: 'fergana', region: 'Farg‘ona' },
    { id: 'namangan', region: 'Namangan' },
    { id: 'samarkand', region: 'Samarqand' },
    { id: 'bukhara', region: 'Buxoro' },
    { id: 'navoiy', region: 'Navoiy' },
    { id: 'khorezm', region: 'Xorazm' },
    { id: 'kashkadarya', region: 'Qashqadaryo' },
    { id: 'surkhandarya', region: 'Surxondaryo' },
    { id: 'jizzakh', region: 'Jizzax' },
    { id: 'syrdarya', region: 'Sirdaryo' },
    { id: 'karakalpakstan', region: 'Qoraqalpog‘iston' },
    { id: 'tashkent_r', region: 'Toshkent v' },
];

const WeatherRegions = () => {
    const { setRegion, selectedRegion } = useWeatherStore();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedRegion = e.target.value;
        if (selectedRegion.trim() === "") return
        setRegion(selectedRegion);
    };

    return (
        <div className='w-full'>
            <h3 className='text-xl font-bold'>Hududlar</h3>
            <form className='max-md:hidden'>
                {regions.map((r, i) => (
                    <label
                        htmlFor={`region-${r.id}`}
                        className={cn('flex justify-between text-md my-1', selectedRegion === r.region ? 'text-blue-600 font-semibold' : 'text-gray-700')}
                        key={r.id}
                    >
                        <span>{r.region}</span>
                        <input
                            type="radio"
                            id={`region-${r.id}`}
                            name="region"
                            value={r.region}
                            onChange={handleChange}
                            className="mr-2"
                        />
                    </label>
                ))}
            </form>
        </div>
    )
}

export default WeatherRegions
