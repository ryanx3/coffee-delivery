import { createContext, ReactNode, useEffect, useState } from "react";
import { CardCoffee } from "../components/Card";
import { produce } from "immer";

export interface CartItem extends CardCoffee {
  quantity: number;
}

export interface CartContextProps {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartItemTotalPrice: number;
  clearCart: () => void;
  removeCoffeeToCart: (coffeeRemoved: number) => void;
  AddCoffeeToCart: (coffee: CartItem) => void;
  setOrderData: (data: AddressData) => void;
  orderData: AddressData | null;
  updateQuantityCoffeeToCart: (
    type: "decrease" | "increase",
    coffeeId: number
  ) => void;
}

export interface AddressData {
  cep: string;
  street: string;
  number: number;
  complement?: string;
  city: string;
  neighborhood: string;
  uf: string;
  paymentType: "pix" | "credit-card" | "debit-card";
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
  const [orderData, setOrderData] = useState<AddressData | null>(null);

  const cartTotalQuantity = cartItems.length;
  const cartItemTotalPrice = cartItems.reduce((total, cart) => {
    return total + cart.price * cart.quantity;
  }, 0);

  function AddCoffeeToCart(coffee: CartItem) {
    const newCart = produce(cartItems, (draft) => {
      const isCoffeeExistsInStorage = cartItems.findIndex(
        (item) => item.id === coffee.id
      );
      if (isCoffeeExistsInStorage < 0) {
        draft.push(coffee);
      } else {
        draft[isCoffeeExistsInStorage].quantity += coffee.quantity;
      }
    });
    setCartItems(newCart);
  }

  function updateQuantityCoffeeToCart(
    type: "decrease" | "increase",
    coffeeId: number
  ) {
    const newCart = produce(cartItems, (draft) => {
      const filteredCoffee = cartItems.findIndex(
        (item) => item.id === coffeeId
      );
      if (filteredCoffee <= 0) {
        const coffee = draft[filteredCoffee];
        if (type === "increase") {
          draft[filteredCoffee].quantity = coffee.quantity + 1;
        } else {
          draft[filteredCoffee].quantity = coffee.quantity - 1;
        }
      }
    });
    setCartItems(newCart);
  }

  function removeCoffeeToCart(coffeeRemoved: number) {
    const newCartWithoutCoffeeRemoved = produce(cartItems, (draft) => {
      const filteredCoffee = cartItems.findIndex(
        (coffee) => coffee.id === coffeeRemoved
      );
      if (filteredCoffee !== -1) {
        draft.splice(filteredCoffee, 1);
      }
    });
    setCartItems(newCartWithoutCoffeeRemoved);
  }

  useEffect(() => {
    try {
      localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  }, [cartItems]);

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        AddCoffeeToCart,
        cartTotalQuantity,
        cartItemTotalPrice,
        removeCoffeeToCart,
        updateQuantityCoffeeToCart,
        orderData,
        setOrderData,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
