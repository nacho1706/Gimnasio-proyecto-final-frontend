import { Route, Routes } from "react-router-dom";
import HomeUser from "../pages/HomeUser";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Nosotros from "../pages/Nosotros";
import Turnos from "../pages/Turnos";
import { Error404 } from "../pages/Error404";
import Detalles from "../pages/Detalles";

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
        <Route path="/Error404" element={<Error404 />} />
        <Route path="/Detalles" element={<Detalles />} />
      </Routes>
    </>
  );
};

export default RouteViews;
