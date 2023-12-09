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
    <div className="flex items-center text-5xl text-white">
      <div className="flex">
        <div className="flex items-center border-t border-b border-l">
          {isActive && <HiMagnifyingGlass />}
          <input
            ref={inputRef}
            className="outline-none text-2xl bg-transparent"
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
          {!firstLoad && <FaKeyboard />}
          {searchText.length > 0 && (
            <IoMdClose
              className="hover:cursor-pointer"
              onClick={() => {
                setSearchText("");
                inputRef.current && inputRef.current.focus();
              }}
            />
          )}
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
