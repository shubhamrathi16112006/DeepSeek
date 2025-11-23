import { Link } from "react-router-dom";
import "../styles/Cardmodule.css";
import movies from "../data/movies.json";

export default function MovieCard() {
  return (
    <div style={{ 
      display: "flex", 
      flexWrap: "wrap", 
      justifyContent: "center",
      padding: "20px",
      gap: "20px"
    }}>
      {movies.map((movie) => (
        <Link 
          key={movie.id}
          to={`/product/${movie.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="shop">
            <img 
              src={movie.img} 
              alt={movie.name}
              className="img"
            />
            <div style={{ padding: "10px" }}>
              <h3>{movie.name}</h3>
              <div className="movie_info">
                <span>IMDb: {movie.Imdb}</span>
                <span>{movie.Info}</span>
              </div>
              <div className="movie_data">
                <span>Duration: {movie.time}</span>
                <span>{movie.run}</span>
              </div>
              <div className="movie_highlight">
                <span>Character: {movie.char}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}