import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./App.css";

import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { Contacts } from "./pages/Contacts/Contacts";
import { Info } from "./pages/Info/Info";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { Product } from "./pages/Product/Product";
import { Cart } from "./pages/Cart/Cart";
import { CartProvider } from "./providers/CartProvider";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<Info />} />
        <Route path="/catalog/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  );
}

export default App;
