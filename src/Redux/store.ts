import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { postSlice } from './slice/postSlice';
import GlobalState from './slice/GlobalState';
const rootReducer = combineReducers({
	[postSlice.reducerPath]: postSlice.reducer,
	GlobalState
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(postSlice.middleware)
	});
};

export type rootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
