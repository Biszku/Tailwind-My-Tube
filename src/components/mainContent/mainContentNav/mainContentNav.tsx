import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const MainContentNav = () => {
  const navigationRef = useRef<HTMLUListElement>(null);
  const [leftValue, setLeftValue] = useState(0);
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

    // "All",
    // "Music",
    // "Gaming",
    // "Live",
    // "News",
    // "Cooking shows",
    // "Action adventure games",
    // "Cooking",
    // "Recently uploaded",

    // "All",
    // "Music",
    // "Gaming",
    // "Live",
    // "News",
    // "Cooking shows",
    // "Action adventure games",
    // "Cooking",
    // "Recently uploaded",
  ];

  const { ref: firstElement, inView: firstElementVisible } = useInView({
    root: document.querySelector("#container"),
    threshold: 1,
  });

  const { ref: lastElement, inView: lastElementVisible } = useInView({
    root: document.querySelector("#container"),
    threshold: 1,
  });

  return (
    <div
      id="container"
      className={`w-[100%] bg-[#0f0f0f] sticky top-[54.25px] z-1 overflow-hidden pt-[1.4rem] pb-[1.4rem]`}
    >
      {!firstElementVisible && (
        <div className="absolute top-0 left-0 h-[100%] px-[2rem] grid place-items-center bg-[#0f0f0f] z-[2] after:absolute after:right-[-70%] after:content-[''] after:h-[100%] after:w-[50px] after:bg-gradient-to-r from-[#0f0f0f] from-[20%] to-[rgba(33,33,33,0)] to-[80%])]">
          <GoChevronLeft
            className="text-[#f1f1f1] text-[2.4rem] hover:cursor-pointer"
            onClick={() => {
              setLeftValue((prev) => prev + 50);
            }}
          />
        </div>
      )}

      <div className="h-[31px]"></div>

      <ul
        ref={navigationRef}
        className={`absolute left-0 top-[50%] translate-y-[-50%] transition-all max-w-max flex gap-[1rem]`}
        style={{
          left: `${leftValue}%`,
        }}
      >
        {tabArr.map((name, index) => {
          const elementRef =
            tabArr.length === index + 1
              ? lastElement
              : index === 0
              ? firstElement
              : null;
          return (
            <li
              key={index}
              ref={elementRef}
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
            </li>
          );
        })}
      </ul>

      {!lastElementVisible && (
        <div
          className="h-[100%] px-[2rem] grid place-items-center absolute top-0 right-0 bg-[#0f0f0f]
        after:absolute after:right-[100%] after:content-[''] after:h-[100%] after:w-[50px] 
        after:bg-gradient-to-l from-[#0f0f0f] from-[20%] to-[rgba(33,33,33,0)] to-[80%])]"
        >
          <GoChevronRight
            className="text-[#f1f1f1] text-[2.4rem] hover:cursor-pointer"
            onClick={() => {
              setLeftValue((prev) => prev - 50);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MainContentNav;
