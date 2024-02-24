import { createSlice } from '@reduxjs/toolkit';

interface State {
	id: number;
}

const initialState: State = {
	id: NaN
};

export const GlobalState = createSlice({
	name: 'SiteBar',
	initialState,
	reducers: {
		addArrEl(state, action) {
			state.id = action.payload;
		}
	}
});

export default GlobalState.reducer;
