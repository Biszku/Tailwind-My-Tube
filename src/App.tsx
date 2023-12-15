import Header from "./components/header/header";
import MainContainer from "./components/mainContent/mainContainer";
import Sidebar from "./components/sIdeBar/sideBar";

const App = () => {
  return (
    <div className="flex flex-col bg-[#0f0f0f]">
      <Header />
      <main className="flex">
        <Sidebar />
        <MainContainer />
      </main>
    </div>
  );
};

export default App;
