import { Section } from "../components/Section/Section";
import classes from "./loaders.module.css";

export const TopSalesLoader = () => {
  return (
    <Section title="Хиты продаж!">
        <div className={classes["preloader"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    </Section>
    
  );
};