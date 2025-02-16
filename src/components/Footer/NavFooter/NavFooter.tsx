import { SectionFooter } from '../SectionFooter/SectionFooter';
import { NavItem } from "../../NavItem/NavItem";
import classes from "./navFooter.module.css";

export const NavFooter = () => {
  const navItems = [
    { label: "О магазине", link: "/about" },
    { label: "Каталог", link: "/catalog" },
    { label: "Контакты", link: "/contacts" },
  ];

  return (
    <div className={classes["footer-nav"]}>
      <SectionFooter title="Информация">
        <ul className={classes["nav__items"]}>
          {navItems.map(({ label, link }) => (
            <NavItem key={label} label={label} link={link} />
          ))}
        </ul>
      </SectionFooter>
    </div>
  );
};
