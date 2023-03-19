import { useContext } from "react";
import MovieCard from "../components/MovieCard";
import { MovieContext } from "../context/MovieContext";

const Favorites = () => {
  const { favorites } = useContext(MovieContext);

  return (
    <div className="flex justify-center flex-wrap min-h-screen">
      {favorites.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default Favorites;
