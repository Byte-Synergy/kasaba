"use client";

import { QRCodeCanvas } from "qrcode.react";
import Container from "./container";
import { FaTelegram } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import React from "react";

const SocialAds = ({
  description,
  title,
  connect_button,
}: {
  connect_button: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full relative bg-linear-to-r from-blue-900 via-blue-800 to-orange-500 z-0">
      <div className=" -z-10 absolute top-0 left-0 bg-blue-950 rounded-br-full h-full w-4/6 max-md:w-full max-md:rounded-none "></div>
      <Container className=" top-0 left-0 h-full flex items-center justify-between max-md:flex-col max-md:gap-8 py-7">
        <div className=" max-md:flex max-md:flex-col max-md:items-center">
          <div className="flex items-center justify-start gap-3 max-md:flex-col ">
            <FaTelegram className="text-blue-400 w-10 h-10" />
            <p className=" font-raleway font-bold text-3xl max-md:text-base text-white max-md:text-center">
              {title}
            </p>
          </div>
          <p className=" my-5 font-raleway font-normal max-md:text-center text-base text-gray-300">
            {description.split("\n").map((l, k) => (
              <React.Fragment key={k}>
                {l}
                <br />
              </React.Fragment>
            ))}
          </p>
          <a href="https://t.me/davlatkasaba" className="cursor-pointer">
            <button className="flex items-center justify-center gap-2 py-3 px-10 bg-orange-500 group">
              <span className=" font-raleway font-semibold text-sm text-white">
                {connect_button}
              </span>
              <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform" />
            </button>
          </a>
        </div>
        <div className=" bg-white border-4 max-md:border-8 border-orange-900/20 rounded-sm overflow-hidden">
          {/* <Suspense
            fallback={<p className="text-black text-center">loading...</p>}
          >
          </Suspense> */}
          <QRCodeCanvas value={"https://t.me/davlatkasaba"} size={200} />
        </div>
      </Container>
    </div>
  );
};

export default SocialAds;
