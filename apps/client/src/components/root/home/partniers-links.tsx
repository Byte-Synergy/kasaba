"use client";

import ScrollAnimation from "@/components/ui/scroll-animation";
import type { Locale } from "@/configs/i18n";
import { PartniersData } from "@/data/partniers-data";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";

const PartniersCard = ({
  data,
  enter_label,
}: {
  data: (typeof PartniersData)[0];
  enter_label: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      target="_blank"
      href={data.link}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full bg-[#f4f4f4] rounded-[5px] shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col min-h-[300px] overflow-hidden"
    >
      {/* Logo Section - Top part of the card */}
      <div className="relative w-full h-52 bg-[#f4f4f4] flex items-center justify-center p-6 overflow-hidden shrink-0">
        <Image
          width={500}
          height={300}
          className="relative z-10 w-full h-full object-cover transition-transform duration-700"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          src={data.img}
          alt={data.title}
        />
      </div>

      {/* Content Section - Dark Blue Body anchored to bottom */}
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="absolute bottom-0 left-0 w-full bg-[#000573] p-5 md:p-6 z-20"
      >
        <motion.p className="font-montserrat font-extrabold text-[14px] md:text-[16px] text-white uppercase line-clamp-2 leading-tight">
          {data.title}
        </motion.p>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 24 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="w-full bg-[#ff8400] text-white text-base font-bold py-3.5 rounded-[5px] text-center shadow-lg uppercase tracking-widest border border-orange-400/20">
                {enter_label}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </a>
  );
};

const PartniersLink = ({ enter_label }: { enter_label: string }) => {
  const { lang } = useParams<{ lang: Locale }>();

  return (
    <div className="w-full my-10">
      <ScrollAnimation className="relative h-full">
        <Swiper
          spaceBetween={15}
          slidesPerView={4.5}
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          className="h-full! pb-12!"
          breakpoints={{
            0: { slidesPerView: 1.2, spaceBetween: 10 },
            640: { slidesPerView: 2.5, spaceBetween: 15 },
            1024: { slidesPerView: 3.5, spaceBetween: 15 },
            1280: { slidesPerView: 4.5, spaceBetween: 20 },
          }}
        >
          {PartniersData.filter((p) => p.lang.toLowerCase() === lang.toLowerCase()).map((data) => (
            <SwiperSlide key={data.link} className="h-full flex!">
              <PartniersCard data={data} enter_label={enter_label} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ScrollAnimation>
    </div>
  );
};

export default PartniersLink;
