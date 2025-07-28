import { Route, Routes } from "react-router-dom";
import FoodIndustryLanding from "./containers/Landing";
import Sidebar from "./layouts/Sidebar";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import {
  Bakery,
  Confectionery,
  Dairy,
  FoodChemistry,
  Horeca,
  Starter,
} from "./containers/products";
import DairyDetail from "./containers/products/DairyDetail";
import StarterDetail from "./containers/products/StarterDetail";
import HorecaDetail from "./containers/products/HorecaDetail";
import FoodChemistryDetail from "./containers/products/PreservativesDetail";
import BakeryDetail from "./containers/products/BakeryDetail";
import CheeseDetail from "./containers/products/CheeseDetail";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header mainPage />
              <FoodIndustryLanding />
              <Footer />
            </>
          }
        />
        <Route
          path="/catalog"
          element={
            <>
              <Header />
              <Sidebar />
              <Footer />
            </>
          }
        >
          <Route path="dairy" element={<Dairy />} />
          <Route path="/catalog/dairy/:productId" element={<DairyDetail />} />

          <Route path="specialized-fats" element={<Starter />} />
          <Route
            path="/catalog/specialized-fats/:productId"
            element={<StarterDetail />}
          />

          <Route path="horeca" element={<Horeca />} />
          <Route path="/catalog/horeca/:productId" element={<HorecaDetail />} />

          <Route path="food-chemistry" element={<FoodChemistry />} />
          <Route
            path="/catalog/food-chemistry/:productId"
            element={<FoodChemistryDetail />}
          />

          <Route path="bakery" element={<Bakery />} />
          <Route path="/catalog/bakery/:productId" element={<BakeryDetail />} />

          <Route path="confectionery" element={<Confectionery />} />
          <Route
            path="/catalog/confectionery/:productId"
            element={<CheeseDetail />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
