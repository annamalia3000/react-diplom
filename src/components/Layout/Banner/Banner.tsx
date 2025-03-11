import classes from "./banner.module.css";

type BannerProps = {
  title: string;
  img: string;
};

export const Banner = ({ img, title }: BannerProps) => {
  return (
    <div className={classes["banner"]}>
      <img src={img} className={classes["banner-img"]} alt={title} />
      <h2 className={classes["banner-header"]}>{title}</h2>
    </div>
  );
};
