import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/LoginProvider";

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
