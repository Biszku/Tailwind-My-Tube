import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

const RigthContainer = () => {
  return (
    <div className="text-white flex items-center gap-[2.9rem]">
      <MdOutlineVideoCall className="text-4xl hover:cursor-pointer" />
      <IoMdNotificationsOutline className="text-4xl hover:cursor-pointer" />
      <img
        className="w-12 h-auto rounded-full hover:cursor-pointer"
        src="/public/avatar.jpg"
        alt="profile"
      />
    </div>
  );
};

export default RigthContainer;
