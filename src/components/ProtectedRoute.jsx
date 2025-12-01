import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function ProtectedRoute({ children }) {
  const { user } = useUser();
  const location = useLocation();

  console.log("ProtectedRoute - User:", user, "Path:", location.pathname);

  // Define which routes require login
  const protectedPaths = ["/Shop", "/About", "/Contact", "/Product"];
  const isProtectedPath = protectedPaths.some(path => 
    location.pathname.startsWith(path)
  );

  // If trying to access protected route without login, redirect to login
  if (!user && isProtectedPath) {
    console.log("Redirecting to login from:", location.pathname);
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }

  // If already on login page and user is logged in, redirect to home
  if (user && location.pathname === "/Login") {
    return <Navigate to="/" replace />;
  }

  console.log("Rendering children for:", location.pathname);
  return children;
}