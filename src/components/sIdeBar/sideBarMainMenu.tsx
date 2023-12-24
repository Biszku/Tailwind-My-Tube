import { GoHome } from "react-icons/go";
import { SiShortcut } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import { LuHistory } from "react-icons/lu";

const SideBarMainMenu = () => {
  const iconClass = "text-[3rem]";
  const firstMenuSec = [
    { name: "Home", icon: <GoHome className={iconClass} /> },
    { name: "Shorts", icon: <SiShortcut className={iconClass} /> },
    {
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions className={iconClass} />,
    },
  ];
  const secondMenuSec = [
    { name: "You", icon: <CiYoutube className={iconClass} /> },
    { name: "History", icon: <LuHistory className={iconClass} /> },
  ];

  return (
    <div className="text-[1.4rem]">
      <div className="flex flex-col">
        {firstMenuSec.map((el) => (
          <span className="flex items-center">
            {el.icon}
            {el.name}
          </span>
        ))}
      </div>
      <div className="flex flex-col">
        {secondMenuSec.map((el) => (
          <span className="flex items-center">
            {el.icon}
            {el.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SideBarMainMenu;
