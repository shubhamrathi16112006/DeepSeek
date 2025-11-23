import { Link } from "react-router-dom";
import "../styles/Cardmodule.css";
import movies from "../data/movies.json";  // ← FIXED IMPORT PATH

export default function MovieCard() {
  return (
    <div style={{ 
      display: "flex", 
      flexWrap: "wrap", 
      justifyContent: "center",
      padding: "20px",
      gap: "20px",
      marginTop: "80px"
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
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/250x350/0000FF/FFFFFF?text=No+Image';
              }}
            />
            <div style={{ padding: "10px" }}>
              <h3 style={{ margin: "10px 0", fontSize: "16px", height: "40px", overflow: "hidden" }}>
                {movie.name}
              </h3>
              <div className="movie_info">
                <span>IMDb: {movie.Imdb}</span>
                <span>{movie.Info}</span>
              </div>
              <div className="movie_data">
                <span>{movie.time}</span>
                <span>{movie.run}</span>
              </div>
              <div className="movie_highlight">
                <span>{movie.char}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}