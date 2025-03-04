import { Loader } from "../../Loader/Loader";
import cn from "classnames";
import classes from "./moreButton.module.css";

type MoreButtonProps = {
  loadMoreItems: () => void;
  loading: boolean;
  hasMore: boolean;
};

export const MoreButton = ({
  loadMoreItems,
  loading,
  hasMore,
}: MoreButtonProps) => {
  if (!hasMore) {
    return null;
  }
  return (
    <div className={classes["more-container"]}>
      {loading ? (
        <Loader />
      ) : (
        <button
          className={cn(classes["more-btn"], "btn-outline-primary")}
          onClick={loadMoreItems}
          disabled={loading}
        >
          {"Загрузить еще"}
        </button>
      )}
    </div>
  );
};
