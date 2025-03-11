import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Loader } from "../../components/Loader/Loader";
import { useFetch } from "../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import classes from "./product.module.css";

type SizesProps = {
  size: string;
  available: boolean;
};

type ItemProps = {
  title: string;
  images: string[];
  sku: number;
  manufacturer: string;
  color: string;
  material: string;
  season: string;
  reason: string;
  sizes: SizesProps[];
};

export const Product = () => {
  const [count, setCount] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const url = import.meta.env.VITE_HOST;
  const apiUrl = `${url}/api/items/${id}`;

  const { data, loading } = useFetch<ItemProps>(apiUrl);

  const availableSizes = data?.sizes
    .filter((size) => size.available)
    .map((size) => (
      <button
        key={size.size}
        className={`${classes["product-size-btn"]} ${
          selectedSize === size.size ? classes["selected"] : ""
        }`}
        onClick={() => handleSizeSelect(size.size)}
      >
        {size.size}
      </button>
    ));

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };
  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  if (loading) {
    return <Loader />;
  }
  if (!data) {
    return null;
  }

  return (
    <div className={classes["product-container"]}>
      <h2 className={classes["product-title"]}>{data.title}</h2>
      <div className={classes["product-content"]}>
        <img
          src={data.images[0]}
          alt={data.title}
          className={classes["product-image"]}
        />
        <div className={classes["product-info"]}>
          <table className={classes["product-table"]}>
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{data.sku}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{data.manufacturer}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{data.color}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{data.material}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{data.season}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{data.reason}</td>
              </tr>
            </tbody>
          </table>
          <div className={classes["product-sizes"]}>
            <p className={classes["product-sizes-el"]}>Размеры в наличии: </p>
            <p className={classes["product-sizes-available"]}>
              {availableSizes}
            </p>
          </div>
          {availableSizes && (
            <>
              <div className={classes["product-count"]}>
                <p className={classes["product-count-el"]}>Количество:</p>
                <div className={classes["product-count-btn-container"]}>
                  <button
                    className={classes["product-count-btn"]}
                    onClick={handleDecrement}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <p className={classes["count"]}>{count}</p>
                  <button
                    className={classes["product-count-btn"]}
                    onClick={handleIncrement}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
              <Link to="/cart"
                className={`${classes["product-cart-button"]} 
              
              ${!selectedSize ? classes["inactive"] : ""}`}
              >
                В корзину
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
