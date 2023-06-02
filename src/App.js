import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
