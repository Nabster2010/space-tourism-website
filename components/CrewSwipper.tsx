import data from "../data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CrewSwipper = () => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      swipeable={true}
      showArrows={false}
      className="max-w-[327px] lg:ml-[166.5px] lg:justify-start md:max-w-[536px] lg:max-w-[1440px] mx-auto mt-8  md:mt-[60px] lg:mt-0 flex flex-col"
    >
      {data.crew.map((member) => (
        <div
          key={JSON.stringify(member)}
          className="flex flex-col lg:flex-row-reverse md:flex-col-reverse"
        >
          <div className="md:mt-[90px] lg:mt-0 flex flex-col justify-center w-full md:self-end">
            <img
              className="h-[223px] md:h-[572px]  object-contain"
              src={member.images.png}
            />
            <div className="w-full h-px md:hidden bg-divider"></div>
          </div>
          <div className="mt-8 text-center lg:mt-[154px] lg:text-start md:mt-0 ">
            <h2 className="uppercase md:mt-0 mt-[74px] font-Bellefair text-White/50 md:text-[24px] lg:text-[32px] text-[18px] ">
              {member.role}
            </h2>
            <h1 className="mt-2 lg:mt-[15px] whitespace-nowrap uppercase text-[24px] lg:text-[56px] md:text-[40px] font-Bellefair text-White">
              {member.name}
            </h1>
            <p className="text-[15px] lg:mt-[27px] lg:max-w-[444px] md:text-base lg:text-[18px]  mt-4 text-lightBlue font-BarlowRegular md:leading-[28px] lg:leading-[32px] leading-[25px] ">
              {member.bio}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CrewSwipper;
