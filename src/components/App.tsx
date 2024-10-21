import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ShopComponent from "./Searches/ShopComponent";
import AboutUsComponent from "./Searches/AboutUs/AboutUsComponent";
import KontaktComponent from "./Searches/Contact/KontaktComponent";
import MainLayout from "../layouts/MainLayout";
import NotFoundComponent from "./Searches/NotFound/NotFoundComponent";
import CartComponent from "./Searches/Cart/CartComponent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopComponent />} />
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/aboutUs" element={<AboutUsComponent />} />
        <Route
          path="/contact"
          element={
            <KontaktComponent
              adres="PlantShop, ul. Kwiatowa 1, 00-001 Warszawa"
              telefon="+48 123 456 789"
              email="kontakt@plantshop.pl"
              mapaUrl="/public/adresMaps.jpg"
            />
          }
        />
        <Route path="*" element={<NotFoundComponent />} />
      </Route>
    </Routes>
  );
};

export default App;
