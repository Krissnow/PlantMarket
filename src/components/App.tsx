import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ShopComponent from "./Searches/ShopComponent";
import AboutUsComponent from "./Searches/AboutUsComponent";
import KontaktComponent from "./Searches/KontaktComponent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<ShopComponent />} />
      <Route path="/aboutUs" element={<AboutUsComponent />} />
      <Route path="/contact" element={<KontaktComponent />} />
    </Routes>
  );
};

export default App;
