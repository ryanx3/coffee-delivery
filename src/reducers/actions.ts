import { CartItem } from "../context/CartContext";

export enum ActionTypes {
  ADD_COFFEE = "ADD_COFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  UPDATE_QUANTITY_COFFEE = "UPDATE_QUANTITY_COFFEE",
  CLEAR_CART = "CLEAR_CART",
}

export type Actions =
  | {
      type: ActionTypes.ADD_COFFEE;
      payload: {
        coffee: CartItem;
      };
    }
  | {
      type: ActionTypes.REMOVE_COFFEE;
      payload: {
        coffeeId: CartItem["id"];
      };
    }
  | {
      type: ActionTypes.UPDATE_QUANTITY_COFFEE;
      payload: {
        coffeeId: CartItem["id"];
        type: "decrease" | "increase";
      };
    }
  | {
      type: ActionTypes.CLEAR_CART;
    };

export function addItemAction(coffee: CartItem) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      coffee,
    },
  } as Actions;
}

export function removeItemAction(coffeeId: CartItem["id"]) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeId,
    },
  } as Actions;
}

export function updatedQuantityAction(
  coffeeId: CartItem["id"],
  type: "decrease" | "increase"
) {
  return {
    type: ActionTypes.UPDATE_QUANTITY_COFFEE,
    payload: {
      coffeeId,
      type,
    },
  } as Actions;
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  } as Actions;
}
