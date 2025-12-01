import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import Movie from "../components/Movie";
import "../styles/Shop.css";

export default function Shop() {
  const { user } = useUser();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading products...</h2>
      </div>
    );
  }

  return (
    <div className="shop-container">
      <div className="products-grid">
        {products.map((product) => (
          <Movie key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}