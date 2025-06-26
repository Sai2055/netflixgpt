import { useSelector } from "react-redux";
import MovieTitle from "./MovieTitle";
import MovieBackground from "./MovieBackground";

export default function MainContainer() {
  const movies = useSelector((appStore) => appStore.movies?.NowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  console.log(mainMovie);
  const { title, overview } = mainMovie;

  return (
    <div>
      <MovieTitle title={title} overview={overview} />
      <MovieBackground />
    </div>
  );
}
