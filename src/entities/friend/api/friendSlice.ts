import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../../app/store';
import { initialFriendList } from './friendApi';

const friendSlice = createSlice({
  name: 'friends',
  initialState: initialFriendList,
  reducers: {
    addFriend: (state, action) => {
      state.push(action.payload);
    },
    editFriend: (state, action) => {
      const { id, ...updatedInfo } = action.payload;
      const friendIndex = state.findIndex((friend) => friend.id === id);
      if (friendIndex !== -1) {
        state[friendIndex] = { ...state[friendIndex], ...updatedInfo };
      }
    },
    removeFriend: (state, action) => {
      const friendIndex = state.findIndex((friend) => friend.id === action.payload);
      if (friendIndex !== -1) {
        state.splice(friendIndex, 1);
      }
    },
  },
});

export const selectFriendById = (state: RootState, id: string) => state.friends.find((friend) => friend.id === id);

export const { addFriend, editFriend, removeFriend } = friendSlice.actions;
export default friendSlice.reducer;
