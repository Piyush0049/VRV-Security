import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload); // Adds a new user to the users array
    },
    updateUserStatus: (state, action) => {
      const { id, status } = action.payload;
      const user = state.users.find(user => user.id === id);
      if (user) user.status = status; // Update the status of a user
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload); // Removes a user by ID
    },
  },
});

export const { addUser, updateUserStatus, deleteUser } = userSlice.actions;
export default userSlice.reducer;
