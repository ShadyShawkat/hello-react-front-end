/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import fetchMessagesAsync from './API/greetings';

const initialState = {
  message: ''
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {
    greetingsSuccess: (state, action) => {
      state.message = action.payload.message;
    }
  },
});

export const { greetingsSuccess } = greetingsSlice.actions;

export const getMessages = () => async (dispatch) => {
  const message = await fetchMessagesAsync();
  dispatch(greetingsSuccess(message));
};

export default greetingsSlice.reducer;