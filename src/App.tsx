import { Route, Routes } from "react-router-dom";
import FoodIndustryLanding from "./containers/Landing";
import Sidebar from "./layouts/Sidebar";
import { Header } from "./layouts/Header";
import Dairy from "./containers/products/Dairy";
import { Footer } from "./layouts/Footer";
import Starter from "./containers/products/Starter";
import Spices from "./containers/products/Spices";
import Colors from "./containers/products/Colors";
import Horeca from "./containers/products/Horeca";
import Filler from "./containers/products/Filler";
import Preservatives from "./containers/products/Preservatives";
import Stabilizers from "./containers/products/Stabilizers";
import Bakery from "./containers/products/Bakery";
import Cheese from "./containers/products/Cheese";

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
          <Route path="starter" element={<Starter />} />
          <Route path="spices" element={<Spices />} />
          <Route path="colors" element={<Colors />} />
          <Route path="horeca" element={<Horeca />} />
          <Route path="filler" element={<Filler />} />
          <Route path="preservatives" element={<Preservatives />} />
          <Route path="stabilizers" element={<Stabilizers />} />
          <Route path="bakery" element={<Bakery />} />
          <Route path="cheese" element={<Cheese />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
