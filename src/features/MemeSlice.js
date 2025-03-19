import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const MEME_API_URL = "https://meme-api.com/gimme/";

// Async Thunk to Fetch Memes
export const fetchMemes = createAsyncThunk(
	"memes/fetchMemes",
	async (count, thunkAPI) => {
		try {
			const response = await fetch(`${MEME_API_URL}${count}`);
			const data = await response.json();

			if (!response.ok) {
				return thunkAPI.rejectWithValue("Failed to fetch Memes");
			}
			return data.memes;
		} catch (error) {
			return thunkAPI.rejectWithValue("Something went wrong", error);
		}
	},
);

// Initial State
const initialState = {
	memes: [],
	loading: false,
	error: null,
	page: 1,
};

// Meme Slice
const memeSlice = createSlice({
	name: "memes",
	initialState,
	reducers: {
		nextPage: (state) => {
			state.page += 1;
		},
		prevPage: (state) => {
			if (state.page > 1) {
				state.page -= 1;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMemes.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchMemes.fulfilled, (state, action) => {
				state.loading = false;
				state.memes = action.payload;
			})
			.addCase(fetchMemes.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

// Export actions and reducer
export const { nextPage, prevPage } = memeSlice.actions;
export default memeSlice.reducer;
