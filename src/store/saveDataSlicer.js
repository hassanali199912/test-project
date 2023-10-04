import { createSlice } from "@reduxjs/toolkit";

const saveDateSlicer = createSlice({
  name: "SaveData",
  initialState: {
    data: null,
  },

  reducers: {
    AddedDate(state, action) {
      state.data = action.payload;
    },
    CleanData(state) {
      state.data = null;
    },
  },
});

export const {AddedDate,CleanData} = saveDateSlicer.actions
export default saveDateSlicer.reducer;