import { cn } from "@/libs/utils";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const SettingProcessAnimation = () => {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 -z-50 flex h-full w-full flex-col items-center justify-center opacity-0",
        "bg-white/75",
        "group-hover:z-30 group-hover:opacity-100",
        "transition-opacity delay-200 duration-500 ease-linear",
      )}
    >
      <DotLottieReact
        src="https://lottie.host/e873b836-d40e-4827-bc27-15e1ee22c7fc/sTH0xyeK59.lottie"
        loop
        autoplay
        style={{ width: "450px" }}
        className={cn(
          //   "scale-150",
          "w-[350px]",
          "rotate-90 p-0 transition-all delay-200 duration-300 ease-linear",
        )}
      />
      {/* <h3 className="-mt-20 text-xl text-[#555]">Tizim sozlanmoqda</h3> */}
    </div>
  );
};

export default SettingProcessAnimation;
