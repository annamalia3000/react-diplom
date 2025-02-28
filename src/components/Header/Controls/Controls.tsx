import { useState, useRef, useEffect } from "react";
import { Search } from "../../Search/Search";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../redux/state/store";
import cn from "classnames";
import classes from "./controls.module.css";

export const Controls = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchValue = useSelector((state: RootState) => state.search.value);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchVisible) {
      inputRef.current?.focus();
    }
  }, [isSearchVisible]);

  const handleSearch = () => {
    if (isSearchVisible && searchValue) {
      navigate("/catalog");
      setSearchVisible((prev) => !prev);
    } else {
      setSearchVisible((prev) => !prev);
    }
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
          <Search ref={inputRef} className={classes["search-header"]} />
        )}
      </div>
    </div>
  );
};
