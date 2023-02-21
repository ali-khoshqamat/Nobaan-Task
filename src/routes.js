import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import VerificationPage from "./pages/VerificationPage";

const routes = [
  { path: "*", element: <NotFound /> },
  { path: "/", element: <ProductsPage /> },
  { path: "/users", element: <UsersPage /> },
  { path: "/verification", element: <VerificationPage /> },
];

export default routes;
