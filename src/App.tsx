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
import StarterCulture from "./pages/milk/StarterCultures";
import Stabilizers from "./pages/milk/Stabilizers";
import Flavorings from "./pages/milk/Flavorings";
import Preservatives from "./pages/milk/Preservatives";
import Enzymes from "./pages/milk/Enzymes";
import MilkFatReplacer from "./pages/milk/MilkFatReplacer";
import SOM from "./pages/milk/SOM";
import Whey from "./pages/milk/Whey";
import StarterMilkFatReplacer from "./pages/starter/MilkFatReplacer";

import DoughFat from "./pages/starter/DoughFat";
import FlourConfectioneryFat from "./pages/starter/FlourConfectioneryFat";
import ChocolateConfectioneryFat from "./pages/starter/ChocolateConfectioneryFat";
import CoatingFat from "./pages/starter/CoatingFat";
import SugarConfectioneryFat from "./pages/starter/SugarConfectioneryFat";

import ProfessionalFryingOils from "./pages/horeca/ProfessionalFryingOils";
import Fats from "./pages/horeca/Fats";
import Nuggets from "./pages/horeca/Nuggets";
import PotatoWedgesFriesSteaks from "./pages/horeca/PotatoWedgesFriesSteaks";
import FrozenBerries from "./pages/horeca/FrozenBerries";

import Sorbate from "./pages/chemistry/Sorbate";
import Phosphomix from "./pages/chemistry/Phosphomix";
import Carrageenan from "./pages/chemistry/Carrageenan";
import AscorbicAcid from "./pages/chemistry/AscorbicAcid";
import Emulsifiers from "./pages/chemistry/Emulsifiers";
import SodiumBenzoate from "./pages/chemistry/SodiumBenzoate";

import Yeast from "./pages/bakery/Yeast";
import Improvers from "./pages/bakery/Improvers";
import Margarines from "./pages/bakery/Margarines";
import ToppingsSeedsNuts from "./pages/bakery/ToppingsSeedsNuts";
import Leavening from "./pages/bakery/Leavening";
import DryMixes from "./pages/bakery/DryMixes";
import BakingImprovers from "./pages/bakery/BakingImprovers";
import BreadMixes from "./pages/bakery/BreadMixes";

import DryMixesConfectionery from "./pages/confectionery/DryMixesConfectionery";
import Fillings from "./pages/confectionery/Fillings";
import Aromatics from "./pages/confectionery/Aromatics";
import Glazes from "./pages/confectionery/Glazes";
import Cream from "./pages/confectionery/Cream";

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
          <Route path="dairy" element={<Dairy />} />
          <Route
            path="/catalog/dairy/starterCultures"
            element={<StarterCulture />}
          />
          <Route path="/catalog/dairy/stabilizers" element={<Stabilizers />} />
          <Route path="/catalog/dairy/flavorings" element={<Flavorings />} />
          <Route
            path="/catalog/dairy/preservatives"
            element={<Preservatives />}
          />
          <Route path="/catalog/dairy/enzymes" element={<Enzymes />} />
          <Route
            path="/catalog/dairy/milkFatReplacer"
            element={<MilkFatReplacer />}
          />
          <Route path="/catalog/dairy/skimMilkPowder" element={<SOM />} />
          <Route path="/catalog/dairy/whey" element={<Whey />} />

          <Route path="specialized-fats" element={<Starter />} />
          <Route
            path="/catalog/specialized-fats/milkFatReplacer"
            element={<StarterMilkFatReplacer />}
          />
          <Route
            path="/catalog/specialized-fats/doughFat"
            element={<DoughFat />}
          />
          <Route
            path="/catalog/specialized-fats/flourConfectioneryFat"
            element={<FlourConfectioneryFat />}
          />
          <Route
            path="/catalog/specialized-fats/chocolateConfectioneryFat"
            element={<ChocolateConfectioneryFat />}
          />
          <Route
            path="/catalog/specialized-fats/coatingFat"
            element={<CoatingFat />}
          />
          <Route
            path="/catalog/specialized-fats/sugarConfectioneryFat"
            element={<SugarConfectioneryFat />}
          />

          <Route path="horeca" element={<Horeca />} />
          <Route
            path="/catalog/horeca/professionalFryingOils"
            element={<ProfessionalFryingOils />}
          />
          <Route path="/catalog/horeca/fats" element={<Fats />} />
          <Route path="/catalog/horeca/nuggets" element={<Nuggets />} />
          <Route
            path="/catalog/horeca/potatoWedgesFriesSteaks"
            element={<PotatoWedgesFriesSteaks />}
          />
          <Route
            path="/catalog/horeca/frozenBerries"
            element={<FrozenBerries />}
          />

          <Route path="food-chemistry" element={<FoodChemistry />} />
          <Route path="/catalog/food-chemistry/sorbate" element={<Sorbate />} />
          <Route
            path="/catalog/food-chemistry/phosphomix"
            element={<Phosphomix />}
          />
          <Route
            path="/catalog/food-chemistry/carrageenan"
            element={<Carrageenan />}
          />
          <Route
            path="/catalog/food-chemistry/ascorbicAcid"
            element={<AscorbicAcid />}
          />
          <Route
            path="/catalog/food-chemistry/emulsifiers"
            element={<Emulsifiers />}
          />
          <Route
            path="/catalog/food-chemistry/sodiumBenzoate"
            element={<SodiumBenzoate />}
          />

          <Route path="bakery" element={<Bakery />} />
          <Route path="/catalog/bakery/yeast" element={<Yeast />} />
          <Route path="/catalog/bakery/improvers" element={<Improvers />} />
          <Route path="/catalog/bakery/margarines" element={<Margarines />} />
          <Route
            path="/catalog/bakery/toppingsSeedsNuts"
            element={<ToppingsSeedsNuts />}
          />
          <Route
            path="/catalog/bakery/leavenIngAgents"
            element={<Leavening />}
          />
          <Route path="/catalog/bakery/dryMixes" element={<DryMixes />} />
          <Route
            path="/catalog/bakery/bakingImprovers"
            element={<BakingImprovers />}
          />
          <Route path="/catalog/bakery/breadMixes" element={<BreadMixes />} />

          <Route path="confectionery" element={<Confectionery />} />
          <Route
            path="/catalog/confectionery/dryMixesConfectionery"
            element={<DryMixesConfectionery />}
          />
          <Route
            path="/catalog/confectionery/fillings"
            element={<Fillings />}
          />
          <Route
            path="/catalog/confectionery/aromatics"
            element={<Aromatics />}
          />
          <Route path="/catalog/confectionery/glazes" element={<Glazes />} />
          <Route path="/catalog/confectionery/cream" element={<Cream />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
