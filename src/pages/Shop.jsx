import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import Movie from "../components/Movie";
import "../styles/Shop.css";

export default function Shop() {
  const { user } = useUser();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }
    
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [user]);

  if (!user) {
    return (
      <div className="not-logged-in">
        <h2>Please login to access the shop</h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading products...</h2>
      </div>
    );
  }

  return (
    <div className="shop-container">
      <h1 className="shop-title">Our Products</h1>
      <p className="welcome-message">Welcome, {user.username}! 👋</p>
      <div className="products-grid">
        {products.map((product) => (
          <Movie key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}