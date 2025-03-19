import { configureStore } from "@reduxjs/toolkit";
import memeReducer from "./features/MemeSlice";

export const store = configureStore({
	reducer: {
		memes: memeReducer,
	},
});

