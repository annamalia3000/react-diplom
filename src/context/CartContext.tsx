import { createContext} from "react";
import { DataProps, ItemCartProps } from "../types/types";

type ItemToAdd = {
  selectedSize: string;
  data: DataProps;
  count: number;
};

type CartContextType = {
  cart: ItemCartProps[];
  setCart: React.Dispatch<React.SetStateAction<ItemCartProps[]>>;
  addToCart: (item: ItemToAdd) => void;
  removeFromCart: (id: number, size: string) => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);


