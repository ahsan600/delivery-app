import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RestaurantType } from "~/types/restaurants";

interface RestaurantState {
  restaurant: RestaurantType | null;
}
const initialState: RestaurantState = {
  restaurant: null,
};

const restaurantSlice = createSlice({
  initialState,
  name: "restaurant",
  reducers: {
    selectRestaurant: (state, action: PayloadAction<RestaurantType | null>) => {
      state.restaurant = action.payload;
    },
  },
});

export const { selectRestaurant } = restaurantSlice.actions;

export const restaurantSelector = (state: any) =>
  state.restaurant.restaurant ?? null;

export default restaurantSlice.reducer;
