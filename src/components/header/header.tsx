import LogoContainer from "./logoContainer/logoContainer";
import RigthContainer from "./rightContainer/rightContainer";
import SearchContainer from "./searchContainer/searchContainer";

const Header = () => {
  return (
    <header className="flex items-center justify-between col-span-2 px-10 ">
      <LogoContainer />
      <SearchContainer />
      <RigthContainer />
    </header>
  );
};

export default Header;
