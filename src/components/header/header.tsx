import LogoContainer from "./logoContainer/logoContainer";
import RigthContainer from "./rightContainer/rightContainer";
import SearchContainer from "./searchContainer/searchContainer";

const Header = () => {
  return (
    <header className="bg-[#0f0f0f] sticky top-0 z-2 flex items-center justify-between col-span-2 px-[2.8rem] ">
      <LogoContainer />
      <SearchContainer />
      <RigthContainer />
    </header>
  );
};

export default Header;
