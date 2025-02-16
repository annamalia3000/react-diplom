import { SectionFooter } from "../SectionFooter/SectionFooter";
import cn from "classnames";
import classes from "./footerContacts.module.css";

export const FooterContacts = () => (
  <div className={classes["footer-contacts"]}>
    <SectionFooter title="Контакты">
      <a
        className={classes["footer-contacts-phone"]}
        href="tel:+7-495-790-35-03"
      >
        +7 495 79 03 5 03
      </a>
      <span className={classes["footer-contacts-working-hours"]}>
        Ежедневно: с 09-00 до 21-00
      </span>
      <a
        className={classes["footer-contacts-email"]}
        href="mailto:office@bosanoga.ru"
      >
        office@bosanoga.ru
      </a>
      <div className={classes["footer-social-links"]}>
        <div
          className={cn(
            classes["footer-social-link"],
            classes["footer-social-link-twitter"]
          )}
        ></div>
        <div
          className={cn(
            classes["footer-social-link"],
            classes["footer-social-link-vk"]
          )}
        ></div>
      </div>
    </SectionFooter>
  </div>
);
