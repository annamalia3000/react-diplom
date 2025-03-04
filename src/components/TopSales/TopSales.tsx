import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../Loader/Loader";
import { Card } from "../Card/Card";
import { Section } from "../Section/Section";
import classes from "./topSales.module.css";

type ProductProps = {
  id: number;
  category: number;
  images: string[];
  title: string;
  price: number;
};

export const TopSales = () => {
  const url = import.meta.env.VITE_HOST;
  const apiUrl = `${url}/api/top-sales`;

  const { data, loading, error } = useFetch<ProductProps[]>(apiUrl);

  if (loading) {
    return <Loader/>;
  }

  if (error || !data || data.length === 0) {
    return null; 
  }

  return (
    <div className={classes["topsales-container"]}>
      <Section title="Хиты продаж!">
        <div className={classes["topsales-items"]}>
          {data.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              img={item.images[0]}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};
