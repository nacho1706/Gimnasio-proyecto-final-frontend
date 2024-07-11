import { Route, Routes } from "react-router-dom";
import HomeUser from "../pages/HomeUser";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Nosotros from "../pages/Nosotros";
import Turnos from "../pages/Turnos";

const RouteViews = () => {
  return (
    <>
      <Routes>
        {/* IR AGREGANDO RUTAS */}
        <Route path="/HomeUser" element={<HomeUser />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Turnos" element={<Turnos />}/>
      </Routes>
    </>
  );
};

export default RouteViews;
