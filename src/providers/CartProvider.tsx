import { useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useDispatch } from "react-redux";
import { setTotalCount, incrementByAmount, decrementByAmount } from "../redux/slicers/cartCountSlice";
import { ItemCartProps, DataProps } from "../types/types";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const cartKey = "cart";
  const dispatch = useDispatch();

  const getCart = (): ItemCartProps[] => {
    return JSON.parse(localStorage.getItem(cartKey) || "[]");
  };

  const [cart, setCart] = useState<ItemCartProps[]>(getCart());
  useEffect(() => {
    localStorage.setItem(cartKey, JSON.stringify(cart));
    const total = cart.reduce((sum, item) => sum + item.count, 0);
    dispatch(setTotalCount(total));
  }, [cart, dispatch]);

  const addToCart = ({
    selectedSize,
    data,
    count,
  }: {
    selectedSize: string;
    data: DataProps;
    count: number;
  }) => {
    if (!selectedSize || !data) {
      return;
    }
    const updatedCart = [...cart];

    const existingItemIndex = updatedCart.findIndex(
      (item: ItemCartProps) =>
        item.id === data.sku && item.size === selectedSize
    );

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].count += count;
    } else {
      updatedCart.push({
        id: data.sku,
        title: data.title,
        price: data.price,
        count: count,
        size: selectedSize,
      });
    }

    setCart([...updatedCart]);
    dispatch(incrementByAmount(count));
  };

  const removeFromCart = (id: number, size: string) => {
    const item = cart.find((item) => item.id === id && item.size === size);
    if (!item) {
      return;
    }
    setCart((prev) => prev.filter((item) => !(item.id === id && item.size === size)));
    dispatch(decrementByAmount(item.count));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
