import { CiYoutube } from "react-icons/ci";
import { GoHistory } from "react-icons/go";
import ListTemplate from "./listTemplate";

const SideBarSecondOptions = () => {
  const firstMenuSec = [
    {
      name: "You",
      Icon: <CiYoutube />,
    },
    {
      name: "History",
      Icon: <GoHistory />,
    },
  ];

  return <ListTemplate data={firstMenuSec} />;
};

export default SideBarSecondOptions;
