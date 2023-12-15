import MainContentNav from "./mainContentNav/mainContentNav";

const MainContainer = () => {
  return (
    <section className="flex-1">
      <MainContentNav />
      <p className="h-[1000vh]">Main Content</p>
    </section>
  );
};

export default MainContainer;
