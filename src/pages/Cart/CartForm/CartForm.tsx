import { useState } from "react";
import { PhoneInput } from "./PhoneInput/PhoneInput";
import { Loader } from "../../../components/Loader/Loader";
import { useCart } from "../../../hooks/useCart";

import classes from "./cartForm.module.css";

type CartFormProps = {
  setSuccess: (success: boolean) => void;
};

export const CartForm: React.FC<CartFormProps> = ({ setSuccess }) => {
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState("");

  const { cart, setCart } = useCart();

  const url = `${import.meta.env.VITE_HOST}/api/order`;

  const handleSubmit = async (formData: FormData) => {
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const agreement = formData.get("agreement") === "on";;

    if (!phone.trim() || !address.trim() || !agreement) {
      setError("Заполните все поля и согласитесь с правилами");
      return;
    }

    setError("");
    setLoading(true);

    const orderData = {
      owner: {
        phone,
        address,
      },
      items: cart.map((item) => ({
        id: Number(item.id),
        price: item.price,
        count: item.count,
      })),
    };
    console.log(orderData);

    try {
      console.log("Отправляем данные:", JSON.stringify(orderData, null, 2));

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Ошибка при оформлении заказа");
      }

      setSuccess(true);

      setCart([]);
      console.log(cart);
      localStorage.clear();
    } catch (error) {
      setError("Произошла ошибка при оформлении заказа");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes["cartform-container"]}>
      {loading ? (
        <Loader />
      ) : (
        <div className={classes["cartform-content"]}>
          <h2 className={classes["cartform-title"]}>Оформить заказ</h2>
          <form action={handleSubmit} className={classes["cartform-form"]}>
            <div className={classes["cartform-form-tel"]}>
              <label htmlFor="phone"> Tелефон </label>
              <PhoneInput/>
            </div>
            <div className={classes["cartform-form-address"]}>
              <label htmlFor="address">Адрес доставки </label>
              <input
                id="address"
                type="text"
                placeholder="Адрес доставки"
                name="address"
                required
                className={classes["cartform-form-input"]}
              />
            </div>
            <div className={classes["cartform-form-agreement"]}>
              <input type="checkbox" id="agreement" name="agreement" required />
              <label htmlFor="agreement">Согласен с правилами доставки </label>
            </div>
            <button type="submit" className={classes["cartform-form-btn"]}>
              Оформить
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
