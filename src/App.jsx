import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import AppPage from "./pages/AppPage";
import ErrorPage from "./pages/ErrorPage";

const Approutes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "product", element: <ProductPage /> },
  { path: "app", element: <AppPage /> },
  { path: "*", element: <ErrorPage /> },
]);

function App() {
  return <RouterProvider router={Approutes} />;
}

export default App;
