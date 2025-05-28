// 'use client'
// import React, { useState } from "react";
// import { dataType } from "./Content";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";

// function Gallery({ data }: dataType) {
//   if (!Array.isArray(data)) return <>Xatolik</>;

//   const [select, setSelect] = useState<string>(data[0]);
//   const [fade, setFade] = useState(false);

//   const changeImage = (src: string) => {
//     setFade(true);
//     setTimeout(() => {
//       setSelect(src);
//       setFade(false);
//     }, 300);
//   };

//   return (
//     <div className="w-full">
//       <div className="relative w-full h-[498px] overflow-hidden mb-4 bg-black/70">
//         <div
//           className={`absolute inset-0 transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"
//             }`}
//         >
//           <Image
//             width={925}
//             height={520}
//             src={select}
//             alt={`Gallery image `}
//             className=" object-cover w-full h-full "
//           />
//         </div>
//       </div>
//       <Carousel>
//         <CarouselContent>
//           {data?.map((src, index) => (
//             <CarouselItem key={index} className="flex justify-center basis-1/5">
//               <Image
//                 src={src}
//                 onClick={() => changeImage(src)}
//                 alt={`Gallery image ${index + 1}`}
//                 width={180}
//                 height={100}
//                 className=" object-cover w-full h-[100px]"
//               />
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious className=" left-5 scale-125 " />
//         <CarouselNext className=" right-5 scale-125" />
//       </Carousel>
//     </div>
//   );
// }

// export default Gallery;
