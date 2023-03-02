import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DisplayedNumbers } from "../../types";

const initialState: DisplayedNumbers = {
  currentNumber: "12",
  formerNumber: "",
  operator: "",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addNumberToCurrentNumber: (
      currentNumberState,
      { payload }: PayloadAction<number>
    ) => ({
      ...currentNumberState,
      currentNumber: `${currentNumberState.currentNumber}${payload}`,
    }),
  },
});

export const calculatorReducer = calculatorSlice.reducer;
export const {
  addNumberToCurrentNumber: AddNumberToCurrentNumberActionCreator,
} = calculatorSlice.actions;
