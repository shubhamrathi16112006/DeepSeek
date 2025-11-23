import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import movies from "../data/movies.json";

export default function Product() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundMovie = movies.find(m => m.id === parseInt(id));
    setMovie(foundMovie);
  }, [id]);

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div style={{ 
      padding: "40px", 
      maxWidth: "1200px", 
      margin: "0 auto",
      display: "flex",
      gap: "40px",
      alignItems: "flex-start"
    }}>
      <img
        src={movie.img}
        alt={movie.name}
        style={{ 
          width: "400px", 
          height: "500px", 
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />
      
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>{movie.name}</h1>
        
        <div style={{ 
          backgroundColor: "navy", 
          color: "white", 
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <strong>IMDb Rating:</strong>
            <span>{movie.Imdb}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <strong>Genre:</strong>
            <span>{movie.Info}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <strong>Duration:</strong>
            <span>{movie.time} ({movie.run})</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Main Character:</strong>
            <span>{movie.char}</span>
          </div>
        </div>
        
        <button 
          style={{
            padding: "12px 24px",
            backgroundColor: "orange",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Watch Movie
        </button>
      </div>
    </div>
  );
}