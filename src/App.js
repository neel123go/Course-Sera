import Banner from "./Pages/Banner/Banner";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="mb-40">
      <div className="h-[100vh]">
        <div className="h-[8vh]">
          <Header />
        </div>
        <div className="h-[87vh] bg-primary">
          <Banner />
        </div>

      </div>

      <div className="px-20">
        <Home />
      </div>
    </div>
  );
}

export default App;
