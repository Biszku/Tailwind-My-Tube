import LogoContainer from "./logoContainer/logoContainer";
import SearchContainer from "./searchContainer/searchContainer";

const Header = () => {
  return (
    <header className="flex justify-between col-span-2 px-10 ">
      <LogoContainer />
      <SearchContainer />
      <p>112112</p>
    </header>
  );
};

export default Header;
