import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function Product() {
  const { id } = useParams();  
  const location = useLocation();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("Selected Product:", data);
        setProduct(data);
      })
      .catch(error => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>{product.title}</h1>

      <div style={{ display: "flex", gap: "40px" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "300px", height: "300px", objectFit: "contain" }}
        />

        <div>
          <h2>₹ {product.price}</h2>
          <p><strong>Category:</strong> {product.category}</p>
          <p style={{ maxWidth: "500px" }}>{product.description}</p>
        </div>
      </div>
    </div>
  );
}