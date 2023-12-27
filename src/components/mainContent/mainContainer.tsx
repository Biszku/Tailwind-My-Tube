import MainContentNav from "./mainContentNav/mainContentNav";

const MainContainer = () => {
  const data = new Array(90).fill("Title");
  return (
    <section className="flex flex-col gap-[2.2rem] flex-1 min-w-[0px]">
      <MainContentNav />
      <div className="grid gap-x-[2rem] grid-cols-[repeat(auto-fit,minmax(31rem,1fr))] pr-[1.6rem]">
        {data.map((el) => (
          <div>
            <div className="aspect-[16/8.6]">
              <img
                className="w-[100%] h-[100%] rounded-[1rem]"
                src="/public/dummyimage.jpg"
              />
            </div>
            <p className="text-white text-[1.6rem]">{el}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainContainer;
