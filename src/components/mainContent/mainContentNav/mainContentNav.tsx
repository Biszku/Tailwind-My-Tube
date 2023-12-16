import { useState } from "react";

const MainContentNav = () => {
  const [activeFilter, setActiveFilter] = useState(0);
  const tabArr = [
    "All",
    "Music",
    "Gaming",
    "Live",
    "News",
    "Cooking shows",
    "Action adventure games",
    "Cooking",
    "Recently uploaded",
  ];
  return (
    <div className="bg-[#0f0f0f] sticky top-[54.25px] z-1 flex gap-[1rem] overflow-auto  pt-[1.4rem] pb-[1.4rem]">
      {tabArr.map((name, index) => {
        return (
          <div
            className={`${
              index === activeFilter ? "bg-[#f1f1f1]" : "bg-[#272727]"
            } min-w-max rounded-[0.8rem] px-[1rem] py-[0.5rem] hover:cursor-pointer`}
            onClick={() => setActiveFilter(index)}
          >
            <span
              className={`${
                index === activeFilter ? "text-[#272727]" : "text-[#f1f1f1]"
              } text-[1.4rem] font-bold `}
            >
              {name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default MainContentNav;
