import { Route, Routes } from "react-router-dom";
import HomeUser from "../pages/HomeUser";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFund";

const RouteViews = () => {
  return (
    <>
      <Routes>
        {/* IR AGREGANDO RUTAS */}
        <Route path="/homeUser" element={<HomeUser />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/NotFund" element={<NotFound />} />
        <Route />
        <Route />
      </Routes>
    </>
  );
};

export default RouteViews;
