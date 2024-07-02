import Footer from "./component/Footer";
import NavbarP from "./component/NavbarP";
import RouteViews from "./routes/RouteViews";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarP />
        <RouteViews />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
