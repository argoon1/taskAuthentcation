import { Navigate, Outlet } from "react-router-dom";
interface RequireAuthProps {
  isAuth: boolean;
  redirectString: string;
}
export const RequireAuth = ({
  isAuth,
  redirectString = "login",
}: RequireAuthProps) => {
  return isAuth ? <Outlet /> : <Navigate to={redirectString} />;
};
