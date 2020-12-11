import { createSlice } from "@reduxjs/toolkit";

let lastId = 1;

const slice = createSlice({
  name: "Labels",
  initialState: [],
  reducers: {
    addLabel: (labels, action) => {
      labels.push({
        id: lastId++,
        description: action.payload.description,
      });
    },
    deleteLabel: (labels, action) => {
      labels = labels.filter((l) => l.id !== action.payload.id);
    },
  },
});

export default slice.reducer;
export const { addLabel, deleteLabel } = slice.actions;
