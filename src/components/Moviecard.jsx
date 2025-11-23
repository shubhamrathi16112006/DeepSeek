import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MovieCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div 
      style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(4, 1fr)", 
        gap: "20px", 
        padding: "20px" 
      }}
    >
      {products.map(product => (
        <Link 
          key={product.id}
          to={`/product/${product.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div 
            style={{ 
              border: "1px solid gray", 
              padding: "10px", 
              borderRadius: "10px" 
            }}
          >
            <img 
              src={product.image}
              alt={product.title}
              style={{ width: "200px", height: "200px", objectFit: "contain" }}
            />

            <h3>{product.title?.substring(0, 20)}...</h3>
            <p>₹ {product.price}</p>
            <p>{product.category}</p>

            <button>View Product</button>
          </div>
        </Link>
      ))}
    </div>
  );
}