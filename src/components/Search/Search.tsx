import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchField } from "../../redux/slicers/searchSlice";
import { RootState } from "../../redux/state/store";
import classes from "./search.module.css";
import { useNavigate } from "react-router-dom";

type SearchProps = {
  className: string;
  setVisible: (value:boolean) => void;

}

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ className, setVisible }, ref) => {
    const dispatch = useDispatch();
    const searchValue = useSelector((state: RootState) => state.search.value);
    const navigate = useNavigate();

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.trim();
      if (value === searchValue) {
        return;
      }
      dispatch(changeSearchField(value));
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
     if (event.key === "Enter") {
      event.preventDefault();
      const value = event.currentTarget.value.trim();
      setVisible(false);
      if (value) {
        dispatch(changeSearchField(value));
        navigate("/catalog");
      }
      
     }
    };

    return (
      <form className={className}>
        <input
          ref={ref}
          className={classes["form-control"]}
          placeholder="Поиск"
          type="search"
          value={searchValue}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        
         
        />
      </form>
    );
  }
);
