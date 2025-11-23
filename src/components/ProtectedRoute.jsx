import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function ProtectedRoute({ children }) {
  const { user } = useUser();
  const location = useLocation();

  // Allow access to home, about, contact without login
  const publicPaths = ["/", "/About", "/Contact", "/Login"];
  const isPublicPath = publicPaths.includes(location.pathname);

  if (!user && !isPublicPath) {
    // Redirect to login if trying to access protected routes without login
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }

  return children;
}