import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bill from "./pages/Bill";
import Index from "./pages/Index";
import Menu from "./pages/Menu";

function App() {
  const router = createBrowserRouter([
    {
      path: "menu",
      element: <Menu />,
    },
    {
      index: true,
      element: <Index />,
    },
    {
      path: "bill",
      element: <Bill />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
