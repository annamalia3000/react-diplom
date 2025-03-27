import { useCart } from "../../../hooks/useCart";
import { ItemCartProps } from "../../../types/types";
import classes from "./cartListItem.module.css";

type CartListItemProps = {
  item: ItemCartProps;
  index: number;
};

export const CartListItem = ({ item, index }: CartListItemProps) => {
  const { removeFromCart } = useCart();

  const sum = item.count * item.price;

  const handleRemove = () => {
    removeFromCart(item.id, item.size);
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{item.title}</td>
      <td>{item.size}</td>
      <td>{item.count}</td>
      <td>{item.price} руб.</td>
      <td>{sum} руб.</td>
      <td>
        <button className={classes["remove-btn"]} onClick={handleRemove}>
          Удалить
        </button>
      </td>
    </tr>
  );
};
