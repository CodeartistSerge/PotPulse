import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type popupsState = {
	login: {
		isOpen:boolean,
	},
	register: {
		isOpen:boolean,
	},
	forget: {
		isOpen:boolean,
	},
}

const initialState:popupsState = {
	login: {
		isOpen: false,
	},
	register: {
		isOpen: false,
	},
	forget: {
		isOpen: false,
	},
}

export const popupsSlice = createSlice({
	name: 'popups',
	initialState,
	reducers: {
		openPopup: (state, action: PayloadAction<keyof popupsState>) => {
			state[action.payload].isOpen = true;
		},
		closePopup: (state, action: PayloadAction<keyof popupsState>) => {
			state[action.payload].isOpen = false;
		},
	}
})

export const { openPopup, closePopup } = popupsSlice.actions
export default popupsSlice.reducer