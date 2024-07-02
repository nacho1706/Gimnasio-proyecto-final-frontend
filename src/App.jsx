import { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import NavbarP from "./component/NavbarP";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";

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
