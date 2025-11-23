import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    const success = login(username, password);
    if (success) navigate("/");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />

        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />

        <button 
          type="submit"
          style={{ 
            padding: "12px", 
            backgroundColor: "black", 
            color: "white", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer" 
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}