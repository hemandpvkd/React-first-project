import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const countSlicer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: state => {
      state.count += 1;
    },
    minus: state => {
      state.count -= 1;
    },
    customValue: (state, action) => {
      action.payload.t == 1
        ? (state.count += action.payload.v)
        : (state.count -= action.payload.v);
    },
  },
});

export const {add, minus, customValue} = countSlicer.actions;
export default countSlicer.reducer;
