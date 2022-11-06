import Header from "../components/Header";
import CrewSwipper from "../components/CrewSwipper";

const CrewPage = () => {
  return (
    <div className="min-h-screen bg-no-repeat bg-cover lg:bg-crew-desktop md:bg-crew-tablet bg-crew-mobile">
      <Header />
      <h2 className="uppercase text-center md:text-start mt-6 md:mt-10 lg:mt-[76px] lg:ml-[166.5px] md:ml-[38.5px] font-Barlow tracking-[2.7px] md:tracking-[3.38px]  lg:tracking-[4.72px] text-base md:text-[20px] lg:text-[28px] text-White">
        <span className="font-bold text-White/25 mr-[18px] lg:mr-7 md:mr-5">
          02
        </span>
        Meet your crew
      </h2>
      <CrewSwipper />
    </div>
  );
};

export default CrewPage;
