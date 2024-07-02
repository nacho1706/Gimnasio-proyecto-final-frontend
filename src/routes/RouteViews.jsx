import { Route, Routes } from "react-router-dom";
import HomeUser from "../pages/HomeUser";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFund";
import AboutUs from "../pages/AboutUs";

const RouteViews = () => {
  return (
    <>
      <Routes>
        {/* IR AGREGANDO RUTAS */}
        <Route path="/" element={<HomeUser />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default RouteViews;
