import { Link } from "react-router-dom";
import { Section } from "../../components/Section/Section";
import cn from "classnames";
import classes from "./notFound.module.css";


export const NotFound = () => {
  return (
    <div className={classes["not-found-container"]}>
      <Section title={"Страница не найдена"}>
        <p>Извините, такая страница не найдена!</p>
        <Link className={cn(classes["not-found-btn"], "btn-outline-primary")} to="/">
        На главную
      </Link>
      </Section>
    </div>
  );
};
