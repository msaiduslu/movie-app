import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavIcon from "../assets/icons/FavIcon";
import { AuthContext } from "../context/AuthContext";
import { MovieContext } from "../context/MovieContext";
import { toastWarnNotify } from "../helpers/ToastNotify";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {
  const { currentUser } = useContext(AuthContext);
  const { addToFavorites, favorites } = useContext(MovieContext);

  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  const navigate = useNavigate();
  const isFavorite = favorites.some((item) => item.id === id);
  return (
    <div
      className="movie"
      id="container"
      onClick={() => {
        navigate("details/" + id);
        !currentUser && toastWarnNotify("Please log in to see details");
      }}
    >
      <FavIcon
        className="absolute top-2 right-2 w-6 h-6 hover:scale-110 text-white"
        onClick={(e) => {
          e.stopPropagation();
          addToFavorites({ title, poster_path, overview, vote_average, id });
        }}
        isFavorite={isFavorite}
      />
      <img
        loading="lazy"
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt="movie-card"
      />
      <div className="flex align-baseline justify-between p-1 text-white">
        <h5>{title}</h5>
        {currentUser && (
          <span className={`tag ${getVoteClass(vote_average)}`}>
            {vote_average.toFixed(1)}
          </span>
        )}
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
