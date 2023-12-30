import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  // Optionally, you can whitelist specific reducers to be persisted
  whitelist: ['contacts'],
  blacklist: ['register'],
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    // Add other reducers if needed
  },
});

const persistor = persistStore(store);

export { store, persistor };
