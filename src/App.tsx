import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FoodIndustryLanding from ".";
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
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header mainPage />
          <FoodIndustryLanding />
          <Footer />
        </>
      ),
    },
    {
      path: "/catalog",
      element: (
        <>
          <Header />
          <Sidebar />
          <Footer />
        </>
      ),

      children: [
        {
          path: "dairy",
          element: <Dairy />,
        },
        {
          path: "starter",
          element: <Starter />,
        },
        {
          path: "spices",
          element: <Spices />,
        },
        {
          path: "colors",
          element: <Colors />,
        },
        {
          path: "horeca",
          element: <Horeca />,
        },
        {
          path: "filler",
          element: <Filler />,
        },
        {
          path: "preservatives",
          element: <Preservatives />,
        },
        {
          path: "stabilizers",
          element: <Stabilizers />,
        },
        {
          path: "bakery",
          element: <Bakery />,
        },
        {
          path: "cheese",
          element: <Cheese />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
