import cn from "classnames";
import classes from "./card.module.css";

type CardProps = {
  id: number;
  img: string;
  title: string;
  price: number;
};

export const Card = ({ id, img, title, price }: CardProps) => {
  return (
    <div className={classes["card"]}>
      <div className={classes["card-img"]}>
      <img
        src={img}
        className={classes["img"]}
        alt={title}
      />
      </div>
      <div className={classes["card-body"]}>
        <p className={classes["card-title"]}>{title}</p>
        <p className={classes["card-price"]}>{`${price} руб.`}</p>
        <a
          href={`/products/${id}`}
          className={cn(classes["card-btn"], "btn-outline-primary")}
        >
          Заказать
        </a>
      </div>
    </div>
  );
};
