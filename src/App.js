import Banner from "./Pages/Banner/Banner";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="mb-40">
      <div className="h-[8vh]">
        <Header />
      </div>
      <div className="md:py-32 py-5 mt-5 bg-primary">
        <Banner />
      </div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
