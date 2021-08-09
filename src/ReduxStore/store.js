import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { usersData } from './requests';

export const store = configureStore({
    reducer: {
        [usersData.reducerPath]: usersData.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersData.middleware),
});

setupListeners(store.dispatch);
