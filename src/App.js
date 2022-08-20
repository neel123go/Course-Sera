import { Route, Routes } from "react-router-dom";
import Banner from "./Pages/Banner/Banner";
import Home from "./Pages/Home/Home";
import Login from "./Pages/LoginRegister/Login/Login";
import Mission from "./Pages/Mission/Mission";
import Services from "./Pages/Services/Services";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import SuccessfulStudents from "./Pages/SuccessfulStudents/SuccessfulStudents";

function App() {
  return (
    <div className="mb-40">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/successfulstudents" element={<SuccessfulStudents />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
