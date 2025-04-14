import { forwardRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchField } from "../../redux/slicers/searchSlice";
import { RootState } from "../../redux/state/store";
import classes from "./search.module.css";
import { useNavigate } from "react-router-dom";

type SearchProps = {
  className: string;
  setVisible: (value: boolean) => void;
};

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ className, setVisible }, ref) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchValue = useSelector((state: RootState) => state.search.value);

    const [inputValue, setInputValue] = useState(searchValue);

    useEffect(() => {
      const handler = setTimeout(() => {
        if (inputValue !== searchValue) {
          dispatch(changeSearchField(inputValue));
        }
      }, 1000);
      return () => {
        clearTimeout(handler);
      };
    }, [inputValue, dispatch, searchValue]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const value = event.currentTarget.value.trim();
        setVisible(false);
        if (value) {
          dispatch(changeSearchField(inputValue));
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
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </form>
    );
  }
);
