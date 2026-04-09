import type { Locale } from "@/configs/i18n";
import { socialsData } from "@/data/social";
import { getDictionary } from "@/utils/directory";
import Link from "next/link";

const SocailMediaLinks = async ({ lang }: { lang: Locale }) => {
  const t = await getDictionary(lang);

  const socialLinks = [
    {
      name: "telegram",
      url: socialsData.telegram.url,
      gradient: "before:bg-gradient-to-br before:from-[#0088cc] before:to-[#54a5db] after:bg-gradient-to-br after:from-[#0088cc] after:to-[#54a5db]",
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-6 h-6 text-gray-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-0 group-hover:opacity-0 group-hover:text-white transition-all duration-300 delay-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <title>Telegram</title>
          <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
        </svg>
      )
    },
    {
      name: "facebook",
      url: socialsData.facebook.url,
      gradient: "before:bg-gradient-to-br before:from-[#1877f2] before:to-[#1976d2] after:bg-gradient-to-br after:from-[#1877f2] after:to-[#1976d2]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-0 group-hover:opacity-0 group-hover:text-white transition-all duration-300 delay-0" aria-hidden="true">
          <title>Facebook</title>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    {
      name: "twitter",
      url: socialsData.x.url,
      gradient: "before:bg-gradient-to-br before:from-[#1da1f2] before:to-[#47b8ff] after:bg-gradient-to-br after:from-[#1da1f2] after:to-[#47b8ff]",
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-0 group-hover:opacity-0 group-hover:text-white transition-all duration-300 delay-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <title>Twitter</title>
          <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path>
        </svg>
      )
    },
    {
      name: "youtube",
      url: socialsData.youtube.url,
      gradient: "before:bg-gradient-to-br before:from-[#cc0000] before:to-[#ff0000] after:bg-gradient-to-br after:from-[#cc0000] after:to-[#ff0000]",
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="w-6 h-6 text-gray-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-0 group-hover:opacity-0 group-hover:text-white transition-all duration-300 delay-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <title>YouTube</title>
          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
        </svg>
      )
    },
    {
      name: "instagram",
      url: socialsData.instagram.url,
      gradient: "before:bg-gradient-to-br before:from-[#833ab4] before:to-[#fcb045] after:bg-gradient-to-br after:from-[#833ab4] after:to-[#fcb045]",
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-6 h-6 text-gray-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-0 group-hover:opacity-0 group-hover:text-white transition-all duration-300 delay-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <title>Instagram</title>
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full max-h-[350px] max-md:max-h-[280px] rounded-xl relative custom-gradient-overlay p-10 z-0 overflow-hidden max-md:p-5 bg-[url('/img/image.png')] bg-no-repeat bg-cover bg-center">
      <h3 className="w-2/3 text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl text-white max-md:text-lg max-md:w-full relative z-10">
        {lang === 'uz-Cyrl' || lang === 'ru-RU' 
          ? "Ўзбекистон давлат муассасалари ва жамоат хизмати ходимлари касаба уюшмаси Республика Кенгаши ижтимоий тармоқларда:"
          : t.header.description + " ijtimoiy tarmoqlarda:"}
      </h3>
      <div className="flex gap-6 mt-10 max-md:gap-3 relative z-10">
        {socialLinks.map((social) => (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            className={`relative w-16 h-16 flex items-center justify-center max-md:w-10 max-md:h-10 rounded-full bg-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out group hover:w-48 transform origin-center max-md:hover:w-32 before:absolute before:inset-0 before:rounded-full before:opacity-0 before:transition-opacity before:duration-500 after:absolute after:top-2.5 after:left-0 after:w-full after:h-full after:rounded-full after:blur-lg after:opacity-0 after:z-[-1] after:transition-opacity after:duration-500 ${social.gradient} hover:before:opacity-100 hover:after:opacity-50`}
          >
            <div className="z-10 text-gray-600 text-2xl transition-all duration-500 delay-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-0 group-hover:opacity-0 group-hover:delay-0 max-md:text-sm">
              {social.icon}
            </div>
            <span className="z-10 absolute text-white text-sm uppercase tracking-wider font-semibold scale-0 opacity-0 rotate-[-45deg] transition-all duration-500 delay-0 group-hover:scale-100 group-hover:opacity-100 group-hover:rotate-0 group-hover:delay-150">
              {social.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocailMediaLinks;
