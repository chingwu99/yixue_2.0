import Image from "next/image";
import yixue from "@/public/images/pages/home/yixue.svg";

const SectionOne = async () => {
  return (
    <section className=" flex  bg-gray-300 pt-20">
      <div className="container flex flex-col items-center justify-center py-5 md:flex-row">
        <div className=" h-full">
          <h1 className="text-[4rem] font-medium italic md:text-[5rem]    xl:text-[7rem]">
            YIXUE
          </h1>
          <p className="text-[1.5rem] font-semibold md:text-[1.7rem] lg:text-[2rem]  ">
            Step outside
            <br />
            Your comfort zone
          </p>
          <p className="text-[1.5rem] font-semibold md:text-[1.7rem]  lg:text-[2rem]  ">
            Learn overflow
          </p>
          <p className="text-[1.5rem] font-semibold md:text-[1.7rem] lg:text-[2rem]   ">
            Learn together
          </p>
        </div>
        <div className="flex h-full items-center justify-center">
          <Image
            src={yixue}
            alt="yixue"
            className="animate-flot mt-5 flex w-[20rem] md:mt-0 xl:w-[22rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
