import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/Product.css";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading product details...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="error-container">
        <h2>Product not found</h2>
        <Link to="/shop" className="back-link">← Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="product-container">
      <Link to="/shop" className="back-link">← Back to Shop</Link>
      
      <div className="product-detail">
        <div className="product-image-section">
          <img 
            src={product.image} 
            alt={product.title}
            className="detail-image"
          />
        </div>
        
        <div className="product-info-section">
          <h1 className="detail-title">{product.title}</h1>
          
          <div className="detail-category">{product.category}</div>
          
          <div className="detail-rating">
            <span className="stars">⭐ {product.rating?.rate}</span>
            <span className="review-count">({product.rating?.count} reviews)</span>
          </div>
          
          <div className="detail-price">${product.price}</div>
          
          <p className="detail-description">{product.description}</p>
          
          <div className="action-buttons">
            <button className="add-to-cart-btn">Add to Cart</button>
            <button className="buy-now-btn">Buy Now</button>
          </div>
          
          <div className="product-features">
            <div className="feature">
              <span>🚚 Free shipping</span>
            </div>
            <div className="feature">
              <span>↩️ 30-day return</span>
            </div>
            <div className="feature">
              <span>🔒 Secure payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}