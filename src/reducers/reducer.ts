import { produce } from "immer";
import { CartItem } from "../context/CartContext";
import { ActionTypes, Actions } from "./actions";

export function cartReducer(state: CartItem[], action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE:
      return produce(state, (draft) => {
        const isCoffeeExistsInStorage = draft.findIndex(
          (coffee) => coffee.id === action.payload.coffee.id
        );
        if (isCoffeeExistsInStorage < 0) {
          draft.push(action.payload.coffee);
        } else {
          draft[isCoffeeExistsInStorage].quantity +=
            action.payload.coffee.quantity;
        }
      });

    case ActionTypes.REMOVE_COFFEE:
      return produce(state, (draft) => {
        const filteredCoffeeIndex = draft.findIndex(
          (coffee) => coffee.id === action.payload.coffeeId
        );
        if (filteredCoffeeIndex !== -1) {
          draft.splice(filteredCoffeeIndex, 1);
        }
      });

    case ActionTypes.UPDATE_QUANTITY_COFFEE:
      return produce(state, (draft) => {
        const coffeeIndex = draft.findIndex(
          (item) => item.id === action.payload.coffeeId
        );
        if (coffeeIndex !== -1) {
          if (action.payload.type === "increase") {
            draft[coffeeIndex].quantity += 1;
          } else if (action.payload.type === "decrease") {
            draft[coffeeIndex].quantity -= 1;
          }
        }
      });

    default:
      return state;
  }
}
