import Image from "next/image";
import Link from "next/link";

const HeroSectionPI = () => {
  return (
    <div className="relative lg:mt-0 mt-[125px] w-full h-[300px] px-4 sm:px-10 flex flex-col gap-2 drop-shadow-lg py-20 justify-center bg-hero">
      <div className="absolute h-full top-0 left-0 right-0 bottom-0 bg-black/50 -z-[1]" />
    
    </div>
  );
};

export default HeroSectionPI;
