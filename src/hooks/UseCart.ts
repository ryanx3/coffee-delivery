import { useContextSelector } from "use-context-selector";
import { CartContext, CartContextProps } from "../context/CartContext";

export function useCart(): CartContextProps {
  return useContextSelector(CartContext, (context) => ({
    cartItems: context.cartItems,
    cartTotalQuantity: context.cartTotalQuantity,
    cartItemTotalPrice: context.cartItemTotalPrice,
    orderData: context.orderData,
    setOrderData: context.setOrderData,
    AddCoffeeToCart: context.AddCoffeeToCart,
    removeCoffeeToCart: context.removeCoffeeToCart,
    clearCart: context.clearCart,
    updatedQuantityOfCoffees: context.updatedQuantityOfCoffees,
  }));
}
