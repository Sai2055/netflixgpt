import { useDispatch } from "react-redux";
import { API_Options } from "../Utility.js/Constants";
import { AddNowPlayingMovies } from "../Utility.js/MoviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const getNowPlayingMovies = async () => {
    const data = await fetch(url, API_Options);
    const json = await data.json();
    console.log(json.results);
    dispatch(AddNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
