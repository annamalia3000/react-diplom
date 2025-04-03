import { FooterContacts } from "./FooterContacts/FooterContacts";
import { FooterPay } from "./FooterPay/FooterPay";
import { NavFooter } from "./NavFooter/NavFooter";

import classes from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={classes["footer-container"]}>
      <NavFooter />
      <div className={classes["footer-mid-section"]}>
      <FooterPay />
      <section>
        <div className={classes["footer-copyright"]}>
          2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.
          Все права защищены.
          <br />
          Доставка по всей России!
        </div>
      </section>
      </div>
      <FooterContacts />
    </footer>
  );
};
