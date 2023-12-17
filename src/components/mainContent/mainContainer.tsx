import MainContentNav from "./mainContentNav/mainContentNav";

const MainContainer = () => {
  return (
    <section className="flex-1 min-w-[0px]">
      <MainContentNav />
      <div className="h-[1000vh] ">
        <p className="text-white">Main Content</p>
      </div>
    </section>
  );
};

export default MainContainer;
