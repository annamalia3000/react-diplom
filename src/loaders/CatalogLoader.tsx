import classes from "./loaders.module.css";

export const CatalogLoader = () => {
  return (
    <div className={classes["preloader"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
