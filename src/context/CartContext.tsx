import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

import { createContext } from "use-context-selector";
import { CardCoffee } from "../components/Card";
import { OrderInfo } from "../pages/Checkout";
import { cartReducer } from "../reducers/reducer";
import {
  addItemAction,
  clearCartAction,
  removeItemAction,
  updatedQuantityAction,
} from "../reducers/actions";

export interface CartItem extends CardCoffee {
  quantity: number;
}

interface Order extends OrderInfo {}

export interface CartContextProps {
  cartItems: CartItem[];
  cartTotalQuantity: number;
  cartItemTotalPrice: number;
  orderData: Order | null;
  setOrderData: (data: Order) => void;
  AddCoffeeToCart: (coffee: CartItem) => void;
  removeCoffeeToCart: (coffeeRemoved: number) => void;
  clearCart: () => void;
  updatedQuantityOfCoffees: (
    type: "decrease" | "increase",
    coffeeId: number
  ) => void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, dispatchCartItems] = useReducer(cartReducer, [], () => {
    const storedCartItem = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
    return storedCartItem ? JSON.parse(storedCartItem) : [];
  });

  const [orderData, setOrderData] = useState<Order | null>(null);

  const cartTotalQuantity = useMemo(() => {
    return cartItems.reduce(
      (total: number, item: CartItem) => total + item.quantity,
      0
    );
  }, [cartItems]);

  const cartItemTotalPrice = useMemo(() => {
    return cartItems.reduce(
      (total: number, cart: CartItem) => total + cart.price * cart.quantity,
      0
    );
  }, [cartItems]);

  const AddCoffeeToCart = useCallback(
    (coffee: CartItem) => {
      dispatchCartItems(addItemAction(coffee));
    },
    [dispatchCartItems]
  );

  const updatedQuantityOfCoffees = useCallback(
    (type: "decrease" | "increase", coffeeId: number) => {
      dispatchCartItems(updatedQuantityAction(coffeeId, type));
    },
    [dispatchCartItems]
  );

  const removeCoffeeToCart = useCallback(
    (coffeeRemoved: number) => {
      dispatchCartItems(removeItemAction(coffeeRemoved));
    },
    [dispatchCartItems]
  );

  const clearCart = useCallback(() => {
    dispatchCartItems(clearCartAction());
  }, [dispatchCartItems]);

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
        removeCoffeeToCart,
        updatedQuantityOfCoffees,
        orderData,
        setOrderData,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
