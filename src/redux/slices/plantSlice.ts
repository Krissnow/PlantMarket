import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export type TSearchPlantParams = {
  currentPage: string;
};

type TPlant = {
  id: string;
  title: string;
  fullTitle: string;
  price: number;
  imageUrl: string;
  size: string;
};

export const fetchPLants = createAsyncThunk<TPlant[], TSearchPlantParams>(
  "plant/fetchPlantsStatus",
  async (params) => {
    const { currentPage } = params;
    const { data } = await axios.get<TPlant[]>(
      `https://apimocha.com/cardplant/example?page=${currentPage}&limit=4`
    );
    return data;
  }
);

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface IPlantSliceState {
  items: TPlant[];
  status: Status;
}

const initialState: IPlantSliceState = {
  items: [],
  status: Status.LOADING,
};

export const plantSlice = createSlice({
  name: "plant",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPLants.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchPLants.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchPLants.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const selectPlantData = (state: RootState) => state.plant;

export const { setItems } = plantSlice.actions;

export default plantSlice.reducer;
