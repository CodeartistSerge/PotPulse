import {configureStore} from '@reduxjs/toolkit'
import popupsReducer from './popups'

export const store = configureStore({
	reducer: {
		popups: popupsReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>