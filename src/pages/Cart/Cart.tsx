import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";
import { CartForm } from "./CartForm/CartForm";
import { CartList } from "./CartList/CartList";
import cn from "classnames";
import classes from "./cart.module.css";

export const Cart = () => {
  const { cart } = useCart();
  const [success, setSuccess] = useState(false);

  return (
    <div className={classes["cart-container"]}>
      {success ? (
        <div className={classes["cart-success"]}>
          <h2>Ваш заказ успешно оформлен!</h2>
        <Link
            className={cn(classes["cartlist-main-btn"], "btn-outline-primary")}
            to="/"
          >
            На главную
          </Link>
        </div>
      ) : (
        <div>
          <CartList />
          {cart.length !== 0 && <CartForm setSuccess={setSuccess} />}
        </div>
      )}
    </div>
  );
};

