import { Route, Routes } from "react-router-dom"
import HomeUser from "../pages/HomeUser"
import LoginU from "../pages/LoginU"


const RouteViews = () => {
  return (
    <>
    <Routes>
        {/* IR AGREGANDO RUTAS */}
        <Route path="/homeUser" element={<HomeUser />}/>
        <Route path="/" element={<LoginU />}/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
    </Routes>
    </>
  )
}

export default RouteViews