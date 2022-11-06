import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import data from "../data.json";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const TechTabComponent = () => {
  let [technology] = useState(data.technology);
  const [selected, setSelected] = useState(technology[0]);
  return (
    <section className="flex flex-col  lg:flex-row-reverse lg:justify-center lg:items-start justify-center items-center lg:gap-[157px] pb-[112px]">
      <div className="mt-8 lg:mt-[26px] md:mt-[60px] lg:max-h-[527px]  lg:max-w-[515px] w-full ">
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet={selected.images.portrait}
          />

          <img
            className="object-contain w-full "
            // layout="fill"
            // objectFit="contain"
            src={selected.images.landscape}
            alt="moon"
          />
        </picture>
      </div>
      <div className="mt-[34px] lg:mt-0 md:mt-[56px] ">
        <div className=" max-w-[327px] md:max-w-[458px] lg:max-w-full">
          <Tab.Group onChange={(i) => setSelected(technology[i])}>
            <div className="lg:items-start lg:justify-start lg:ml-[165px] lg:mt-[137px] lg:gap-20 lg:flex lg:flex-row">
              <Tab.List className="flex flex-row lg:flex-col items-center justify-center gap-4 lg:gap-8 lg:justify-start font-Bellefair text-White  text-base md:text-[24px] tracking-[1px] md:tracking-[1.5px]">
                {technology.map((tech, idx) => (
                  <Tab
                    key={tech.name}
                    className={({ selected }) =>
                      classNames(
                        "uppercase  outline-none  h-10 w-10 md:w-[60px] md:h-[60px] rounded-full border border-White/25 hover:border-White transition",
                        "",
                        selected
                          ? "bg-White text-black"
                          : "bg-transparent text-White"
                      )
                    }
                  >
                    {idx + 1}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                {technology.map((tech, idx) => (
                  <Tab.Panel key={idx} className={classNames("", "")}>
                    <div className="text-center text-White lg:text-start ">
                      <p className="uppercase text-[14px] md:text-base lg:mt-0  mt-[26px] md:mt-[44px]  text-lightBlue font-Barlow tracking-[2.36px] md:tracking-[2.7px]">
                        THE TERMINOLOGY…
                      </p>
                      <h1 className="whitespace-nowrap lg:mt-[11px] mt-[9px] md:mt-4 leading-[1] uppercase font-Bellefair  text-[24px] md:text-[40px] lg:text-[56px]  ">
                        {tech.name}
                      </h1>
                      <p className=" lg:mt-[17px] mt-4 max-w-[372px] md:max-w-[573px]  lg:max-w-[444px] font-BarlowRegular text-[15px] md:text-base  lg:text-[18px] text-lightBlue leading-[25px] lg:leading-8 md:leading-7">
                        {tech.description}
                      </p>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default TechTabComponent;
