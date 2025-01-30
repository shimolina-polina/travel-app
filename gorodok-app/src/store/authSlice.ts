import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {isAuthenticated: boolean} = {
    isAuthenticated : false,
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setIsAuthenticated: (state: {isAuthenticated: boolean}, action: PayloadAction<boolean>) => {
        state.isAuthenticated = action.payload;
      },
    },
  });
  
  export const {
    setIsAuthenticated,
  } = authSlice.actions;
  
  export default authSlice.reducer;
  