import { BsCameraVideo } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

const RigthContainer = () => {
  return (
    <div className="text-white flex items-center">
      <BsCameraVideo className="text-4xl" />
      <IoMdNotificationsOutline className="text-4xl" />
      <img className="w-12 h-auto" src="/public/avatar.jpg" alt="profile" />
    </div>
  );
};

export default RigthContainer;
