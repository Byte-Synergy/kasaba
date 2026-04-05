import React from "react";
import Button from "./button";

function Methods({
  email_label,
  helpline_phone_number,
  reception_number,
}: {
  email_label: string;
  helpline_phone_number: string;
  reception_number: string;
}) {
  return (
    <div className=" grid grid-cols-2 gap-6 ">
      <div className=" max-md:col-span-2">
        <p className=" font-raleway text-base font-medium mb-2">
          {helpline_phone_number}
        </p>
        <Button text="+998 71 256 54 86" />
      </div>
      <div className=" max-md:col-span-2">
        <p className=" font-raleway text-base font-medium mb-2">
          {reception_number}
        </p>
        <Button text="+998 71 252 37 97" />
      </div>
      <div className=" col-span-2">
        <p className=" font-raleway text-base font-medium mb-2">
          {email_label}
        </p>
        <Button isEmail text="davlat@kasaba.uz" />
      </div>
    </div>
  );
}

export default Methods;
