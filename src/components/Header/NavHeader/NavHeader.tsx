import { NavItem } from "../../NavItem/NavItem";
import classes from "./navHeader.module.css";

export const NavHeader = () => {
  const navItems = [
    { label: "Главная", link: "/" },
    { label: "Каталог", link: "/catalog" },
    { label: "О магазине", link: "/about" },
    { label: "Контакты", link: "/contacts" },
  ];

  return (
    <div className={classes["navbar-collapse"]} id="navbarMain">
      <ul className={classes["nav__items"]}>
        {navItems.map(({ label, link }) => (
          <NavItem key={label} label={label} link={link} />
        ))}
      </ul>
    </div>
  );
};
