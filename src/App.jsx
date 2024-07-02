import RouteViews from "./routes/RouteViews";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RouteViews />
      </BrowserRouter>
    </>
  );
};

export default App;
