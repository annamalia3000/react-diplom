import { Link } from "react-router-dom";
import { CartListItem } from "../CartListItem/CartListItem";
import cn from "classnames";
import classes from "./cartList.module.css";
import { useCart } from "../../../hooks/useCart";


export const CartList = () => {
  const { cart } = useCart();
  const sumPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className={classes["cartlist-container"]}>
      {cart.length === 0 ? (
        <div className={classes["cartlist-empty"]}>
          <h2 className={classes["cartlist-title"]}>Корзина пуста</h2>
          <Link
            className={cn(classes["cartlist-main-btn"], "btn-outline-primary")}
            to="/"
          >
            На главную
          </Link>
        </div>
      ) : (
        <div className={classes["cartlist-content"]}>
          <h2 className={classes["cartlist-title"]}>Корзина</h2>
          <table className={classes["cartlist-table"]}>
            <thead>
              <tr>
                <th>#</th>
                <th>Название</th>
                <th>Размер</th>
                <th>Кол-во</th>
                <th>Стоимость</th>
                <th>Итого</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <CartListItem
                  key={item.id + item.size}
                  index={index + 1}
                  item={item}
                />
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className={classes["cartlist-table-col-span"]} colSpan={5}>
                  Общая стоимость
                </td>
                <td>{sumPrice} руб.</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};
