import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Banner } from "./Banner/Banner";
import { Footer } from "./Footer/Footer";
import classes from "./layout.module.css";

export const Layout = () => {
  return (
    <div className={classes["site-container"]}>
      <Header />
      <main>
        <Banner img="/img/banner.jpg" title="К весне готовы!" />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
