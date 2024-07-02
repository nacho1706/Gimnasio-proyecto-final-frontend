import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";

const RouteViews = () => {
  return (
    <>
      <Routes>
        {/* IR AGREGANDO RUTAS */}
        <Route path="/Contacto" element={<Contact />} />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </>
  );
};

export default RouteViews;
