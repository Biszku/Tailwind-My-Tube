import { AiOutlineFire } from "react-icons/ai";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { MdOutlineMovie } from "react-icons/md";
import { CiStreamOn } from "react-icons/ci";
import { BiJoystick } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa";
import { IoTrophyOutline } from "react-icons/io5";
import { MdOutlinePodcasts } from "react-icons/md";
import ListTemplate from "./listTemplate";

const ExploreSection = () => {
  const firstMenuSec = [
    {
      name: "Trending",
      Icon: <AiOutlineFire />,
    },
    {
      name: "Music",
      Icon: <IoMusicalNoteOutline />,
    },
    {
      name: "Movies",
      Icon: <MdOutlineMovie />,
    },
    {
      name: "Live",
      Icon: <CiStreamOn />,
    },
    {
      name: "Gaming",
      Icon: <BiJoystick />,
    },
    {
      name: "News",
      Icon: <FaRegNewspaper />,
    },
    {
      name: "Sports",
      Icon: <IoTrophyOutline />,
    },
    {
      name: "Podcasts",
      Icon: <MdOutlinePodcasts />,
    },
  ];

  return <ListTemplate header="Explore" data={firstMenuSec} />;
};

export default ExploreSection;
