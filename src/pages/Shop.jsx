import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import "../styles/Shop.css";

export default function Shop() {
  const { user } = useUser();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return; // ✅ Check inside useEffect
    
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
  }, [user]); // ✅ Add user dependency

  // ✅ CONDITIONAL RETURN AFTER ALL HOOKS
  if (!user) {
    return (
      <div className="not-logged-in">
        <h2>Please login to access the shop</h2>
      </div>
    );
  }

}