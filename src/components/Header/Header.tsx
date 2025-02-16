import { Controls } from "./Controls/Controls";
import { Logo } from "./Logo";
import { NavHeader } from "./NavHeader";
import classes from "./header.module.css";

export const Header = () => {
  return (
    <header className={classes["header-container"]}>
      <nav className={classes["navbar"]}>
        <Logo />
        <NavHeader />
        <Controls />
      </nav>
    </header>
  );
};
