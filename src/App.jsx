import { useState } from "react";

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
