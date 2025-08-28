import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DishType } from "~/types/restaurants";

interface cartState {
  cart: (DishType & { quantity: number })[] | null;
}
const initialState: cartState = {
  cart: null,
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addCart: (state, action: PayloadAction<DishType>) => {
      const findDish = state.cart?.find(
        (dish) => dish.id === action.payload.id
      );
      if (findDish) {
        const index = state.cart?.findIndex(
          (dish) => dish.id === action.payload.id
        );
        if (index === undefined || index === -1) return;
        const dish = {
          ...findDish,
          quantity: findDish.quantity ? findDish.quantity + 1 : 1,
        };
        state.cart[index] = dish;
      }
      if (state.cart === null) {
        state.cart = [action.payload];
        return;
      }
      state.cart = [...state.cart, action.payload];
    },
    removeCart: (state, action: PayloadAction<DishType>) => {
      if (state.cart === null) return;
      const newState = [...state.cart];
      state.cart = newState.filter((dish) => dish.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cart = null;
    },
    findCart: (
      state,
      action: PayloadAction<DishType>
    ): DishType | boolean | string => {
      if (state.cart === null) return false;

      const findCart = state.cart.find((dish) => dish.id === action.payload.id);
      if (findCart) return findCart;
      return "There is no such dish in the cart ";
    },
  },
});

export const { addCart, removeCart, clearCart, findCart } = cartSlice.actions;

export const cartSelector = (state: any) => state.cart.cart;

export default cartSlice.reducer;
