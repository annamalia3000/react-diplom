import { Link } from "react-router-dom";
import logo from '/img/header-logo.png'
import classes from './logo.module.css'

export const Logo = () => {
  return (
    <Link className={classes["navbar-brand"]} to="/">
     <img src={logo} alt="Bosa Noga"/>
    </Link>
  );
};