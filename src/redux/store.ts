import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cart from "./slices/cartSlice";
import plant from "./slices/plantSlice";

export const store = configureStore({
  reducer: {
    cart,
    plant,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
