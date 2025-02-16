import {  Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import "./App.css";

import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />  
      </Route>
    )
  );
  return (
    <RouterProvider router={routes} />
  );
}

export default App;


