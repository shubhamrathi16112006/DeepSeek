import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function ProtectedRoute() {
  const { user } = useUser();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
