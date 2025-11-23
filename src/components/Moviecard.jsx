import { Link } from "react-router-dom";

export default function Moviecard({ product }) {
  return (
    <Link 
      to={`/product/${product.id}`}
      className="product-link"
    >
      <div className="card">
        <img 
          src={product.image} 
          alt={product.title}
          className="product-image"
        />
        <div className="product-info">
          <h3 className="product-title">{product.title.substring(0, 50)}...</h3>
          
          <div className="movie_info">
            <span className="product-category">{product.category}</span>
            <span className="product-price">${product.price}</span>
          </div>
          
          <div className="movie_info">
            <span className="product-rating">⭐ {product.rating?.rate}</span>
            <span className="product-reviews">({product.rating?.count} reviews)</span>
          </div>
          
          <p className="product-description">
            {product.description.substring(0, 100)}...
          </p>
          
          <button className="buy-button">View Details</button>
        </div>
      </div>
    </Link>
  );
}