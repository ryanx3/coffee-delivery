import { createContext, ReactNode, useState } from "react";
import { CardType } from "../components/Card";
import { produce } from "immer";

interface CartItem extends CardType {
  quantity: number;
}

export interface CartContextProps {
  cartItems: CartItem[];
  AddCoffeeToCart: (coffee: CartItem) => void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function AddCoffeeToCart(coffee: CartItem) {
    const isCoffeeExistsInStorage = cartItems.findIndex(
      (item) => item.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (isCoffeeExistsInStorage < 0) {
        draft.push(coffee);
      } else {
        draft[isCoffeeExistsInStorage].quantity += coffee.quantity;
      }
    });
    setCartItems(newCart);
  }

  return (
    <CartContext.Provider value={{ cartItems, AddCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  );
}
