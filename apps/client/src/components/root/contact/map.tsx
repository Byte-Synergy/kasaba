import React from "react";

function Map() {
  return (
    <div className=" h-full max-md:h-96">
      <iframe
        title="Buxoro, 24"
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.948283144101!2d69.26982107588458!3d41.30998867130975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2684155393%3A0x61790cb214f1022!2sBukhara%20Street%2024%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1744609669681!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
