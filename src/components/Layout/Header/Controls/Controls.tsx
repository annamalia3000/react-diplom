import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { RootState } from "../../../../redux/state/store";
import { changeSearchField } from "../../../../redux/slicers/searchSlice";
import { Search } from "../../../Search/Search";


import cn from "classnames";
import classes from "./controls.module.css";


export const Controls = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchValue = useSelector((state: RootState) => state.search.value);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const cartCount = useSelector((state: RootState) => state.cartCount.value);

  useEffect(() => {
    if (location.pathname !== "/catalog") {
      setSearchVisible(false);
      dispatch(changeSearchField(""));
    }
  }, [location, dispatch]);

  useEffect(() => {
    if (isSearchVisible) {
      inputRef.current?.focus();
    }
  }, [isSearchVisible]);

  const handleSearch = () => {
    if (isSearchVisible && searchValue) {
      navigate("/catalog");
      setSearchVisible(false);
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
        {cartCount > 0 && (
          <div className={classes["header-controls-cart-full"]}>
            {cartCount}
          </div>
        )}
        <Link
          to="/cart"
          className={classes["header-controls-cart-menu"]}
        ></Link>
        {isSearchVisible && (
          <Search
            ref={inputRef}
            className={classes["search-header"]}
            setVisible={setSearchVisible}
          />
        )}
      </div>
    </div>
  );
};
