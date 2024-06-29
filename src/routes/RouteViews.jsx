import { Route, Routes } from "react-router-dom"
import HomeUser from "../pages/HomeUser"

const RouteViews = () => {
  return (
    <>
    <Routes>
        {/* IR AGREGANDO RUTAS */}
        <Route path="/homeUser" element={<HomeUser />}/>
        <Route path="/login" element={}/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
    </Routes>
    </>
  )
}

export default RouteViews