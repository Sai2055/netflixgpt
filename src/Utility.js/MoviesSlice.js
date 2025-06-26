import { createSlice } from "@reduxjs/toolkit";
const MoviesSlice = createSlice({
  name: "Movies",
  initialState: { NowPlayingMovies: null },
  reducers: {
    AddNowPlayingMovies: (state, action) => {
      state.NowPlayingMovies = action.payload;
    },
  },
});
export const { AddNowPlayingMovies } = MoviesSlice.actions;
export default MoviesSlice.reducer;
