import { Route, Routes } from "react-router-dom";
import Banner from "./Pages/Banner/Banner";
import Home from "./Pages/Home/Home";
import Login from "./Pages/LoginRegister/Login/Login";
import Register from "./Pages/LoginRegister/Register/Register";
import RequiredAuth from "./Pages/LoginRegister/RequiredAuth/RequiredAuth";
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
        <Route path="/services" element={
          <RequiredAuth>
            <Services />
          </RequiredAuth>
        } />
        <Route path="/mission" element={<Mission />} />
        <Route path="/successfulstudents" element={<SuccessfulStudents />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
