import { Card } from "../../Card/Card";
import classes from "./catalogContent.module.css";

type CatalogContentProps = {
  data: { id: number; images: string; title: string; price: number }[] | null;
};

export const CatalogContent = ({ data }: CatalogContentProps) => {
  return (
    <div className={classes["catalog-items"]}>
      {data?.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          img={item.images[0]}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
};
