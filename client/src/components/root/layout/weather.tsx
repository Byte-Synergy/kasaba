// import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
// import { ChevronDown } from 'lucide-react'
// import React, { useCallback, useEffect, useState } from 'react'

// export const regions = [
//     {
//         id: 1,
//         region: "Toshkent shahar",
//     },
//     {
//         id: 2,
//         region: "Toshkent viloyat",
//     },
//     {
//         id: 3,
//         region: "Jizzax ",
//     },
//     {
//         id: 4,
//         region: "Sirdaryo ",
//     },
//     {
//         id: 5,
//         region: "Andijon",
//     },
//     {
//         id: 6,
//         region: "Namangan ",
//     },
//     {
//         id: 7,
//         region: "Farg'ona ",
//     },
//     {
//         id: 8,
//         region: "Samarqand",
//     },
//     {
//         id: 9,
//         region: "Qashqadaryo",
//     },
//     {
//         id: 10,
//         region: "Surxondaryo",
//     },
//     {
//         id: 11,
//         region: "Navoi",
//     },
//     {
//         id: 12,
//         region: "Xorazm",
//     },
//     {
//         id: 13,
//         region: "Buxoro",
//     },
//     {
//         id: 14,
//         region: "Qoraqalpog'iston",
//     },
// ]

// const fetchWeather = async (city: string) => {
//     try {
//         const res = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=uz&appid=1f80edf7f90a7c1e663f06d287d50a64`
//         );
//         const data = await res.json();
//         return data
//     } catch (error) {
//         console.error("Ob-havo ma’lumotlarini olishda xatolik:", error);
//     }
// };

// const Weather = () => {
//     const [selectPlace, setSelectPlace] = useState<string>("toshkent shahar")
//     const [weather, setWeather] = useState<any>(null);

//     useEffect(() => {
//         const value = selectPlace.match(/^\S+/)
//         if (value) {
//             setSelectPlace(value[0])
//             setWeather(fetchWeather(selectPlace))
//         }
//     }, [])

//     const onChangeRegionHandler = useCallback((e: string) => {
//         const value = e.match(/^\S+/)
//         if (value) {
//             setSelectPlace(value[0])
//             setWeather(fetchWeather(e))
//         }
//     }, [])

//     return (
//         <div className='flex items-center'>
//             <div className='w-9 h-9 p-2 bg-white/10 rounded-3xl border border-white/10 backdrop-blur-[20px] justify-center items-center inline-flex'>
//                 <img src="/icon/weather.svg" alt="weather-icon" className='w-full h-full object-contain' />
//             </div>
//             <div className='flex flex-col items-start'>
//                 <span className='text-white text-sm font-bold ml-2'>28 °C</span>
//                 <Select onValueChange={(e) => onChangeRegionHandler(e)}>
//                     <SelectTrigger className='flex items-center gap-x-2 w-[86px] p-0 text-white text-xs font-medium outline-hidden border-none '>
//                         <span className='text-white px-2 capitalize'>{selectPlace}</span>
//                         <ChevronDown className='w-5 h-5' />
//                     </SelectTrigger>
//                     <SelectContent className='w-[320px] rounded-none border-none'>
//                         <h3 className='text-center py-3 px-4 bg-[#ff8400]/80 text-white'>Hududni Tanlang</h3>
//                         <div className='flex flex-wrap border-none'>
//                             {
//                                 regions.map(({ id, region }) => (
//                                     <SelectItem key={region} value={region} className="w-1/2 inline-flex items-center gap-x-2 py-3 px-4 bg-[#ff8400]/80 first-letter:relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:content-[''] after:-z-0 rounded-none hover:after:bg-white/15 border border-[1px]">
//                                         <span className='text-white'>{region}</span>
//                                     </SelectItem>
//                                 ))
//                             }
//                         </div>
//                     </SelectContent>
//                 </Select>
//             </div>
//         </div>
//     )
// }

// export default Weather
