import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactSlice';
import { persistStore, persistReducer } from 'redux-persist';
import createTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';

const immutableTransform = createTransform(
  inboundState => inboundState,

  outboundState => outboundState,

  { whitelist: ['contacts'], blacklist: ['register'] }
);

const persistConfig = {
  key: 'root',
  storage,
  transforms: [immutableTransform],
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
