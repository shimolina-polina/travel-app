import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filtersReducer from './filtersSlice';
import authReducer from './authSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
  key: 'root', // ключ для localStorage
  storage,
  // whitelist: ['yourReducer'], // (Необязательно) список редукторов для сохранения
  // blacklist: ['anotherReducer'], // (Необязательно) список редукторов, которые не нужно сохранять
};

const rootReducer = combineReducers({
  filtersReducer,
  authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // Используем persistedReducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Игнорируем экшены persist
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { filtersReducer };
