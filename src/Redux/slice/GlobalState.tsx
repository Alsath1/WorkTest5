import { createSlice } from '@reduxjs/toolkit';

interface State {
	NumPage: number;
	Loading: boolean;
	Input: string;
}

const initialState: State = {
	NumPage: 0,
	Loading: false,
	Input: ''
};

export const GlobalState = createSlice({
	name: 'SiteBar',
	initialState,
	reducers: {
		setPagePlus(state) {
			if (state.NumPage < 160) {
				state.NumPage = state.NumPage + 1;
			}
		},
		setPageMinus(state) {
			if (state.NumPage > 0) {
				state.NumPage = state.NumPage - 1;
			}
		},
		isLoading(state, action) {
			state.Loading = action.payload;
		},
		inputValue(state, action) {
			state.Input = action.payload;
		}
	}
});

export default GlobalState.reducer;
