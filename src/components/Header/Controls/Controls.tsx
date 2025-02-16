import { useState, useRef, useEffect } from "react";
import cn from "classnames";
import classes from "./controls.module.css";

export const Controls = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isSearchVisible) {
      inputRef.current?.focus();
    }
  }, [isSearchVisible]);

  const handleSearch = () => {
    setSearchVisible((prev) => !prev);
  };

  return (
    <div className={classes["header-controls-pics"]}>
      <div
        data-id="search-expander"
        className={cn(
          classes["header-controls-pic"],
          classes["header-controls-search"]
        )}
        onClick={handleSearch}
        aria-expanded={isSearchVisible}
      ></div>
      <div
        className={cn(
          classes["header-controls-pic"],
          classes["header-controls-cart"]
        )}
      >
        <div className={classes["header-controls-cart-full"]}>1</div>
        <div className={classes["header-controls-cart-menu"]}></div>
        {isSearchVisible && (
          <form
            data-id="search-form"
            className={cn(
              classes["header-controls-search-form"],
              "form-inline"
            )}
          >
            <input
              ref={inputRef}
              className={classes["form-control"]}
              placeholder="Поиск"
            />
          </form>
        )}
      </div>
    </div>
  );
};
