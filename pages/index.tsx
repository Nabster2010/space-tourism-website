import type { NextPage } from "next";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-no-repeat bg-cover lg:bg-home-desktop md:bg-home-tablet bg-home-mobile">
      <Header />
      <section className="flex flex-col lg:flex-row lg:justify-between lg:px-[165px] items-center gap-[50px]  ">
        <div className="px-6 mt-12  md:mt-[106px] text-center md:max-w-[450px]">
          <p className="uppercase font-Barlow tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px] md:text-[20px] lg:text-[28px] text-lightBlue">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="font-Bellefair text-[80px] leading-[1]  md:text-[150px] text-White uppercase mt-4 md:mt-6">
            SPACE
          </h1>
          <p className="text-lightBlue md:text-base lg:text-[18px] md:leading-7 lg:leading-8 font-BarlowRegular text-[15px] text-center mt-4 md:mt-[63px] leading-6">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="transition bg-transparent rounded-full hover:bg-White/10 lg:self-end ">
          <div className="w-[150px] h-[150px]  m-[50px]  lg:w-[274px] lg:h-[274px] lg:m-[80px] md:w-[242px] md:h-[242px] md:m-[90px] bg-White rounded-full flex justify-center items-center ">
            <h1 className="text-black  font-Bellefair text-[20px] md:text-[32px] tracking-[1.25px] md:tracking-[2px]">
              EXPLORE
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
