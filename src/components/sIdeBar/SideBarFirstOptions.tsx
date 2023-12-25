import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { MdOutlineSubscriptions } from "react-icons/md";
import ListTemplate from "./listTemplate";

const SideBarFirstOptions = () => {
  const firstMenuSec = [
    {
      name: "Home",
      Icon: <GoHome />,
    },
    {
      name: "Shorts",
      Icon: <BiCameraMovie />,
    },
    {
      name: "Subscriptions",
      Icon: <MdOutlineSubscriptions />,
    },
  ];

  return <ListTemplate data={firstMenuSec} />;
};

export default SideBarFirstOptions;
