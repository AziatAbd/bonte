import { Route, Routes } from "react-router-dom";
import FoodIndustryLanding from "./containers/Landing";
import Sidebar from "./layouts/Sidebar";
import { Header } from "./layouts/Header";
import Dairy from "./containers/Dairy";
import { Footer } from "./layouts/Footer";
import Starter from "./containers/Starter";
import Spices from "./containers/Spices";
import Colors from "./containers/Colors";
import Horeca from "./containers/Horeca";
import Filler from "./containers/Filler";
import Preservatives from "./containers/Preservatives";
import Stabilizers from "./containers/Stabilizers";
import Bakery from "./containers/Bakery";
import Cheese from "./containers/Cheese";

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
