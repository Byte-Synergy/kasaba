"use client";

import dynamic from "next/dynamic";
const AOSProviderDynamic = dynamic(() => import("./aos"), { ssr: false });

export default AOSProviderDynamic;
