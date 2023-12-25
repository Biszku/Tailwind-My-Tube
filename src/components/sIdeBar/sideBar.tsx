import SideBarFirstOptions from "./SideBarFirstOptions";
import SideBarSecondOptions from "./SideBarSecondOptions";
import ExploreSection from "./exploreSection";

const Sidebar = () => {
  return (
    <aside className="asideElementWidth sticky top-[54.25px] text-white w-[21.5rem]">
      <SideBarFirstOptions />
      <SideBarSecondOptions />
      <ExploreSection />
    </aside>
  );
};

export default Sidebar;
