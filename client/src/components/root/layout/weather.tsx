import {
    Dialog,
    DialogTrigger,
    DialogContent,
} from '@/components/ui/dialog'
import { ChevronDown, CloudSun, Cloudy, Sun } from 'lucide-react'
import Image from 'next/image'
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


const Weather = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='inline-flex items-center justify-start gap-x-2 max-md:p-0 max-md:flex-row-reverse max-md:bg-blue-700 max-md:rounded-3xl max-md:px-2  max-md:border-white/10 max-md:backdrop-blur-[10px]' role='button'>
                    <div className='w-12 h-12 flex items-center justify-center p-2 rounded-full border-2 border-[#ffffff4e] bg-[#ffffff4e] max-md:w-10 max-md:h-10 max-md:bg-transparent max-md:border-transparent max-md:p-0'>
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
                            <span className='text-white text-sm font-bold '>28 </span>
                            <span className='text-white text-sm font-normal'>°C</span>
                        </div>
                        <div className='row-span-1 col-span-1 inline-flex justify-start items-center gap-x-1 max-md:flex-row-reverse'>
                            <span className='justify-start text-white/50 text-sm font-bold leading-none'>Тошкент</span>
                            <ChevronDown className='justify-start text-white/50 w-4 h-4 font-medium leading-none' />
                        </div>
                    </div>
                </div>
            </DialogTrigger>

            <DialogContent className="min-w-4xl w-full bg-white rounded-xl px-6 py-3 shadow-xl max-md:min-w-full max-md:h-full max-md:rounded-none max-md:px-3 max-md:overflow-y-auto">
                <div className='flex items-start gap-x-4 max-md:flex-col-reverse'>
                    <div className='w-4/6 flex flex-col max-md:w-full'>
                        {/*  Currency weather box */}
                        <div className='flex items-center justify-between mb-4 max-md:flex-col max-md:items-start'>
                            <div className='w-3/4'>
                                <div className=''>
                                    <h3 className='text-xl font-bold'>Toshkent shahar</h3>
                                    <p className='text-sm font-medium'>Chorshanba, 04 - iyun</p>
                                </div>
                                <h1 className='text-7xl font-bold mt-2 text-[#FF8400]'>+33°C</h1>
                            </div>
                            <div className='w-1/4'>
                                <Sun className='w-36 h-36 float-end' />
                            </div>
                        </div>
                        {/* Today weather box */}
                        <ul className='max-md:w-2xl flex gap-x-8 p-3 bg-[#f9f9f9] rounded-2xl overflow-x-auto text-[#051769] max-md:overflow-scroll'>
                            <li className=''>
                                <h5 className='font-medium'>Hozir</h5>
                                <p className='my-1 text-lg'>+33°C</p>
                                <Cloudy className='w-6 h-6 text-[#29303f]' />
                            </li>
                            <li className=''>
                                <h5>Hozir</h5>
                                <p className='my-1'>+33°C</p>
                                <Cloudy className='w-5 h-5' />
                            </li>
                            <li className=''>
                                <h5>Hozir</h5>
                                <p className='my-1'>+33°C</p>
                                <Cloudy className='w-5 h-5' />
                            </li>
                            <li className=''>
                                <h5>Hozir</h5>
                                <p className='my-1'>+33°C</p>
                                <Cloudy className='w-5 h-5' />
                            </li>
                            <li className=''>
                                <h5>Hozir</h5>
                                <p className='my-1'>+33°C</p>
                                <Cloudy className='w-5 h-5' />
                            </li>
                            <li className=''>
                                <h5>Hozir</h5>
                                <p className='my-1'>+33°C</p>
                                <Cloudy className='w-5 h-5' />
                            </li>
                            <li className=''>
                                <h5>Hozir</h5>
                                <p className='my-1'>+33°C</p>
                                <Cloudy className='w-5 h-5' />
                            </li>
                            <li className=''>
                                <h5>Hozir</h5>
                                <p className='my-1'>+33°C</p>
                                <Cloudy className='w-5 h-5' />
                            </li>
                        </ul>

                        {/* weekends weather box */}
                        <div className="mt-4 text-center text-gray-700 p-3 px-0 bg-[#f9f9f9] rounded-2xl ">
                            {/* <h3 className='text-xl '>Haftalik ob-havo</h3> */}
                            <ul className="relative h-36 flex flex-col flex-wrap gap-y-2 gap-x-0 after:absolute after:w-[1px] after:h-full after:content-[''] after:top-0 after:left-1/2 after:bg-[#e7e7e7] max-md:flex-nowrap max-md:after:hidden max-md:h-full">
                                <li className='w-1/2 flex justify-evenly items-center max-md:w-full'>
                                    <p>Payshanba, 05</p>
                                    <div className='flex items-center gap-x-1'>
                                        <CloudSun className='w-6 h-6' />
                                        <b className='text-xl'>+33°C</b>
                                    </div>
                                </li>
                                <li className='w-1/2 flex justify-evenly items-center max-md:w-full'>
                                    <p>Payshanba, 05</p>
                                    <div className='flex items-center gap-x-1'>
                                        <CloudSun className='w-6 h-6' />
                                        <b className='text-xl'>+33°C</b>
                                    </div>
                                </li>
                                <li className='w-1/2 flex justify-evenly items-center max-md:w-full'>
                                    <p>Payshanba, 05</p>
                                    <div className='flex items-center gap-x-1'>
                                        <CloudSun className='w-6 h-6' />
                                        <b className='text-xl'>+33°C</b>
                                    </div>
                                </li>
                                <li className='w-1/2 flex justify-evenly items-center max-md:w-full'>
                                    <p>Payshanba, 05</p>
                                    <div className='flex items-center gap-x-1'>
                                        <CloudSun className='w-6 h-6' />
                                        <b className='text-xl'>+33°C</b>
                                    </div>
                                </li>
                                <li className='w-1/2 flex justify-evenly items-center max-md:w-full'>
                                    <p>Payshanba, 05</p>
                                    <div className='flex items-center gap-x-1'>
                                        <CloudSun className='w-6 h-6' />
                                        <b className='text-xl'>+33°C</b>
                                    </div>
                                </li>
                                <li className='w-1/2 flex justify-evenly items-center max-md:w-full'>
                                    <p>Payshanba, 05</p>
                                    <div className='flex items-center gap-x-1'>
                                        <CloudSun className='w-6 h-6' />
                                        <b className='text-xl'>+33°C</b>
                                    </div>
                                </li>
                                <li className='w-1/2 flex justify-evenly items-center max-md:w-full'>
                                    <p>Payshanba, 05</p>
                                    <div className='flex items-center gap-x-1'>
                                        <CloudSun className='w-6 h-6' />
                                        <b className='text-xl'>+33°C</b>
                                    </div>
                                </li>
                                <li className='w-1/2 flex justify-evenly items-center max-md:w-full'>
                                    <p>Payshanba, 05</p>
                                    <div className='flex items-center gap-x-1'>
                                        <CloudSun className='w-6 h-6' />
                                        <b className='text-xl'>+33°C</b>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <form className='w-2/6 p-3 bg-[#f9f9f9] rounded-xl max-md:w-full'>
                        <h3 className='text-xl font-bold'>Hududlar</h3>
                        <div className='max-md:hidden'>
                            {regions.map((r, i) => (
                                <label htmlFor={`region-${r.id}`} className='flex justify-between text-md my-1'>
                                    <span>{r.region}</span>
                                    <input
                                        type="radio"
                                        id={`region-${r.id}`}
                                        name="region"
                                        value={r.region}
                                        // onChange={handleChange}
                                        // checked={tanlanganViloyat === viloyat}
                                        className="mr-2"
                                    />
                                </label>
                            ))}
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Weather
