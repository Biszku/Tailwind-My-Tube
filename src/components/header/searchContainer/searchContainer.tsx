import { IoMdMic } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
const SearchContainer = () => {
  return (
    <div className="flex items-center text-5xl text-white">
      <div className="flex">
        <div className="flex items-center">
          <input className="text-2xl " type="text" placeholder="Szukaj" />
        </div>
        <div className="flex items-center">
          <HiMagnifyingGlass />
        </div>
      </div>
      <div className="">
        <IoMdMic />
      </div>
    </div>
  );
};

export default SearchContainer;
