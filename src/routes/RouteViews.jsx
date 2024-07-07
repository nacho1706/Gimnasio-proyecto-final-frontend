import { Route, Routes } from "react-router-dom"
import HomeUser from "../pages/HomeUser"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Detalles from "../pages/Detalles"


const RouteViews = () => {
  return (
    <>
    <Routes>
        {/* IR AGREGANDO RUTAS */}
        <Route path="/homeUser" element={<HomeUser />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Detalles" element={<Detalles />} />
        <Route/>
        <Route/>
    </Routes>
    </>
  )
}

export default RouteViews