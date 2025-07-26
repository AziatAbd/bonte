import { Route, Routes } from "react-router-dom";
import FoodIndustryLanding from "./containers/Landing";
import Sidebar from "./layouts/Sidebar";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import {
  Bakery,
  Cheese,
  Colors,
  Dairy,
  Filler,
  Horeca,
  Preservatives,
  Spices,
  Stabilizers,
  Starter,
} from "./containers/products";
import DairyDetail from "./containers/products/DairyDetail";
import StarterDetail from "./containers/products/StarterDetail";
import SpicesDetail from "./containers/products/SpicesDetail";
import ColorsDetail from "./containers/products/ColorsDetail";
import HorecaDetail from "./containers/products/HorecaDetail";
import FillerDetail from "./containers/products/FillerDetail";
import PreservativesDetail from "./containers/products/PreservativesDetail";
import StabilizersDetail from "./containers/products/StabilizersDetail";
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

          <Route path="starter" element={<Starter />} />
          <Route
            path="/catalog/starter/:productId"
            element={<StarterDetail />}
          />

          <Route path="spices" element={<Spices />} />
          <Route path="/catalog/spices/:productId" element={<SpicesDetail />} />

          <Route path="colors" element={<Colors />} />
          <Route path="/catalog/colors/:productId" element={<ColorsDetail />} />

          <Route path="horeca" element={<Horeca />} />
          <Route path="/catalog/horeca/:productId" element={<HorecaDetail />} />

          <Route path="filler" element={<Filler />} />
          <Route path="/catalog/filler/:productId" element={<FillerDetail />} />

          <Route path="preservatives" element={<Preservatives />} />
          <Route
            path="/catalog/preservatives/:productId"
            element={<PreservativesDetail />}
          />

          <Route path="stabilizers" element={<Stabilizers />} />
          <Route
            path="/catalog/stabilizers/:productId"
            element={<StabilizersDetail />}
          />

          <Route path="bakery" element={<Bakery />} />
          <Route path="/catalog/bakery/:productId" element={<BakeryDetail />} />

          <Route path="cheese" element={<Cheese />} />
          <Route path="/catalog/cheese/:productId" element={<CheeseDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
