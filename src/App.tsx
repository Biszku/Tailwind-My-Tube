import Header from "./components/header/header";
import MainContainer from "./components/mainContent/mainContainer";
import Sidebar from "./components/sIdeBar/sideBar";

const App = () => {
  return (
    <div className="bg-black grid grid-cols-[auto_1fr] grid-rows-[auto_auto]">
      <Header />
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default App;
