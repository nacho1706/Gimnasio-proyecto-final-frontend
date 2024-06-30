import { Route, Routes } from "react-router-dom"
import HomeUser from "../pages/HomeUser"
import Login from "../pages/Login"


const RouteViews = () => {
  return (
    <>
    <Routes>
        {/* IR AGREGANDO RUTAS */}
        <Route path="/homeUser" element={<HomeUser />}/>
        <Route path="/Login" element={<Login />}/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
    </Routes>
    </>
  )
}

export default RouteViews