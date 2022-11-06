import Header from "../components/Header";
import TechTabComponent from "../components/TechTabComponent";

const TechnologyPage = () => {
  return (
    <div className="min-h-screen bg-no-repeat bg-cover lg:bg-technology-desktop md:bg-technology-tablet bg-technology-mobile">
      <Header />
      <h2 className="uppercase text-center md:text-start mt-6 md:mt-10 lg:mt-[76px] lg:ml-[166.5px] md:ml-[38.5px] font-Barlow tracking-[2.7px] md:tracking-[3.38px]  lg:tracking-[4.72px] text-base md:text-[20px] lg:text-[28px] text-White">
        <span className="font-bold text-White/25 mr-[18px] lg:mr-7 md:mr-5">
          03
        </span>
        SPACE LAUNCH 101
      </h2>
      <TechTabComponent />
    </div>
  );
};

export default TechnologyPage;
