import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./slice/restaurantSlice";
const store = configureStore({
  reducer: {
    restaurant: restaurantSlice,
  },
});
export default store;
