import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import data from "../data.json";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const DestinationsTabComponent = () => {
  let [destinations] = useState(data.destinations);
  const [selected, setSelected] = useState(destinations[0]);
  return (
    <section className="flex flex-col  lg:flex-row justify-center items-center lg:gap-[157px] pb-[112px]">
      <div className="mt-8 lg:mt-[97px] md:mt-[60px] md:max-w-[300px] lg:max-w-[445px] max-w-[170px]">
        <Image
          className=""
          width={445}
          height={445}
          src={selected.images.png}
          alt="moon"
        />
      </div>
      <div className="mt-[26px] lg:mt-[64px] md:mt-[53px] ">
        <div className="lg:w-[445px] ">
          <Tab.Group onChange={(i) => setSelected(destinations[i])}>
            <Tab.List className="flex flex-row items-center justify-center lg:justify-start gap-[26px]  md:gap-[35px] text-White font-Barlow text-[18px] tracking-[2.7px]  ">
              {destinations.map((dest) => (
                <Tab
                  key={dest.name}
                  className={({ selected }) =>
                    classNames(
                      "uppercase text-[14px] md:text-base tracking-[2.36px] md:tracking-[2.7px] text-lightBlue  relative hover:after:bg-White/50 after:absolute after:content-[''] after:transition after:h-[3px] after:w-full  after:left-0  after:-bottom-2 lg:after:-bottom-3  ",
                      "",
                      selected
                        ? "after:bg-White outline-none"
                        : "after:bg-transparent"
                    )
                  }
                >
                  {dest.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {destinations.map((dest, idx) => (
                <Tab.Panel key={idx} className={classNames("", "")}>
                  <div className="text-center text-White lg:text-start">
                    <h1 className=" lg:mt-[52px] mt-8  leading-[1] uppercase font-Bellefair text-[56px] md:text-[80px] lg:text-[100px]  ">
                      {dest.name}
                    </h1>
                    <p className=" lg:mt-[14px] mt-2 max-w-[372px] md:max-w-[573px] font-BarlowRegular text-[15px] md:text-base  lg:text-[18px] text-lightBlue leading-[25px] lg:leading-8 md:leading-7">
                      {dest.description}
                    </p>
                    <div className="md:mt-[49px] mt-8 lg:mt-[54px] h-px bg-divider w-full" />
                    <div className="flex flex-col md:flex-row  text-start justify-center lg:justify-start items-center md:gap-[79px] mt-8 ">
                      <div className="text-center lg:text-start">
                        <h3 className="text-[14px] uppercase font-Barlow text-lightBlue tracking-[2.36px]">
                          AVG. DISTANCE
                        </h3>
                        <h2 className="font-Bellefair mt-3 uppercase text-[28px] ">
                          {dest.distance}
                        </h2>
                      </div>
                      <div className="mt-8 text-center lg:text-start md:mt-0">
                        <h3 className="text-[14px] uppercase font-Barlow text-lightBlue tracking-[2.36px]">
                          Est. travel time
                        </h3>
                        <h2 className="font-Bellefair mt-3 uppercase text-[28px] ">
                          {dest.travel}
                        </h2>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default DestinationsTabComponent;
