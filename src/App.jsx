import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RouteViews from "./routes/RouteViews";
import { BrowserRouter } from "react-router-dom";
import NavbarP from "./component/NavbarP";
import Footer from "./component/Footer";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavbarP />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
