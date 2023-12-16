import { SlMenu } from "react-icons/sl";
const LogoContainer = () => {
  return (
    <div className="text-3xl text-white flex items-center gap-24">
      <SlMenu className="hover:cursor-pointer" />
      <span className="font-bold hover:cursor-pointer">MyTube</span>
    </div>
  );
};

export default LogoContainer;
