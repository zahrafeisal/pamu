import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: Props) => {
  const token = localStorage.getItem("token"); // Check if JWT exists

  if (!token) {
    return <Navigate to="/" replace />; // Redirect to login
  }

  return children;
};

export default ProtectedRoute;
