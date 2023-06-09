import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
  data: null,
  isLoggedIn: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload
    },
    loginFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    editPasswordRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    editPasswordSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
      state.isLoggedIn = false;
    },
    editPasswordFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isLoading = false;
      state.error = null;
      state.data.token = null;
      state.isLoggedIn = false;
    }
  },
});


export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  editPasswordRequest,
  editPasswordSuccess,
  editPasswordFailure,
  logout
} = authSlice.actions;

export const selectAuth = createSelector(
  (state) => state.auth,
  (auth) => auth
);

export default authSlice.reducer;
