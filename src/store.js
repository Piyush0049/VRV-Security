import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default localStorage
import userReducer from "./slices/Userslice";
import roleReducer from "./slices/Roleslice";

// Persist configuration for users
const userPersistConfig = {
  key: "users", // Key for storing user data
  storage,      // Use localStorage for persistence
};

// Persist configuration for roles
const rolePersistConfig = {
  key: "roles", // Key for storing role data
  storage,      // Use localStorage for persistence
};

// Create persisted reducers
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedRoleReducer = persistReducer(rolePersistConfig, roleReducer);

// Configure store
const store = configureStore({
  reducer: {
    users: persistedUserReducer, // Use persisted reducer for users
    roles: persistedRoleReducer, // Use persisted reducer for roles
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Ignore non-serializable checks for redux-persist
    }),
});

// Persist store
export const persistor = persistStore(store);

export default store;
