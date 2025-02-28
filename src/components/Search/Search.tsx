import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchField } from "../../redux/slicers/searchSlice";
import { RootState } from "../../redux/state/store";
import classes from "./search.module.css";

export const Search = forwardRef(
  ({ className }: { className: string }, ref: React.Ref<HTMLInputElement>) => {
    const dispatch = useDispatch();
    const searchValue = useSelector((state: RootState) => state.search.value);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.trim();
      if (value === searchValue) {
        return;
      }
      dispatch(changeSearchField(value));
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
        />
      </form>
    );
  }
);
