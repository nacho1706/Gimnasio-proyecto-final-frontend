import { Route, Routes } from "react-router-dom"
import HomeUser from "../pages/HomeUser"
import Login from "../pages/Login"
import Register from "../pages/Register"


const RouteViews = () => {
  return (
    <>
    <Routes>
        {/* IR AGREGANDO RUTAS */}
        <Route path="/homeUser" element={<HomeUser />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        <Route/>
        <Route/>
        <Route/>
    </Routes>
    </>
  )
}

export default RouteViews