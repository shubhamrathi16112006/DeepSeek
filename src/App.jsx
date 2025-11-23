import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Product from "./pages/Product";

function App() {
  const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login />,
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          element: <AppLayout />,
          children: [
            { index: true, element: <Home /> },
            { path: "About", element: <About /> },
            { path: "Shop", element: <Shop /> },
            { path: "Contact", element: <Contact /> },
            { path: "Product/:id", element: <Product /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;