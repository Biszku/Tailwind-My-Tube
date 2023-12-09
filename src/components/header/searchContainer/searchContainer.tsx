import { IoMdMic } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaKeyboard } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState, useRef } from "react";

const SearchContainer = () => {
  const [firstLoad, setFirstLoad] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="w-1/3 flex items-center justify-end gap-6 text-white py-3">
      <div className="flex flex-1">
        <div
          className={`flex flex-1 items-center border-t border-b border-l  ${
            isActive ? "border-blue-500 border-r" : "border-gray-700"
          } rounded-l-full py-3 pl-6 pr-4 gap-1`}
        >
          {isActive && <HiMagnifyingGlass className="text-3xl mr-4" />}
          <input
            ref={inputRef}
            className="flex-1 outline-none text-2xl bg-transparent "
            type="text"
            placeholder="Szukaj"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onFocus={() => {
              setIsActive(true);
            }}
            onBlur={() => {
              setIsActive(false);
            }}
            onClick={() => {
              setFirstLoad(false);
            }}
          />
          {!firstLoad && <FaKeyboard className="text-3xl" />}
          {searchText.length > 0 && (
            <IoMdClose
              className="text-3xl hover:cursor-pointer"
              onClick={() => {
                setSearchText("");
                inputRef.current && inputRef.current.focus();
              }}
            />
          )}
        </div>
        <div className="flex items-center bg-zinc-800 rounded-r-full px-8">
          <HiMagnifyingGlass className="text-4xl" />
        </div>
      </div>
      <div className="grid px-3 place-items-center self-stretch bg-zinc-800  rounded-full ">
        <IoMdMic className="text-4xl" />
      </div>
    </div>
  );
};

export default SearchContainer;
