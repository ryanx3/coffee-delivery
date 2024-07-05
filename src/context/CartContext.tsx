import { createContext, ReactNode, useEffect, useState } from "react";
import { CardType } from "../components/Card";
import { produce } from "immer";

interface CartItem extends CardType {
  quantity: number;
}

export interface CartContextProps {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartItemTotalPrice: number;
  AddCoffeeToCart: (coffee: CartItem) => void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const storedCartItem = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
      if (storedCartItem) {
        return JSON.parse(storedCartItem);
      }
      return [];
    } catch (error) {
      alert(
        "Ocorreu um erro ao carregar o carrinho de compras. Tente novamente mais tarde."
      );
      return [];
    }
  });

  const cartTotalQuantity = cartItems.length;

  const cartItemTotalPrice = cartItems.reduce((total, cart) => {
    return total + cart.price * cart.quantity;
  }, 0);

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

  useEffect(() => {
    try {
      localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        AddCoffeeToCart,
        cartTotalQuantity,
        cartItemTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
