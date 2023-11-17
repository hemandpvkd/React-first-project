import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hasSessionToken: false,
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.hasSessionToken = action.payload?.sessionToken || false;
      state.user = action.payload || null;
    },
    clearSession:(state)=>{
      state.hasSessionToken=false
      state.user=null
    }
  },
});

export const { setSession,clearSession } = userSlice.actions;

export default userSlice.reducer;
