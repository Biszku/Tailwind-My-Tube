const MainContentNav = () => {
  const tabArr = [
    "Wszystko",
    "Gry",
    "Na żywo",
    "Muzyka",
    "Playlisty Youtube Mix",
    "Przygodowe gry akcji",
    "Rapowanie",
    "Gotowanie",
    "Ostatnio przesłane",
    "Obejrzane",
    "Nowe rekomendacje",
  ];
  return (
    <div className="flex">
      {tabArr.map((name) => {
        return (
          <div className="">
            <span className="text-white">{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MainContentNav;
