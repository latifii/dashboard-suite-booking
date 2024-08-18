import { ReactNode, useEffect } from "react";
import { useUser } from "../../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center bg-base-content bg-opacity-50">
        <Spinner variant="info" />
      </div>
    );

  if (isAuthenticated) return <>{children}</>;
};

export default ProtectedRoute;
