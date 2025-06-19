import React, { useEffect } from "react";
import Header from "./Header";
import { API_Options } from "../Utility.js/Constants";

const Browse = () => {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const getNowPlayingMovies = async () => {
    const data = await fetch(url, API_Options);
    const json = await data.json();
    console.log(json.results);
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
