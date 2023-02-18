import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SecureLink } from "../pages/SecureLink";
import { RequireAuth } from "./RequireAuth";
export const Navigation = () => {
  const { userIsAuthenticated } = useAuthContext();
  //user <
  return (
    <Routes>
      <Route path={"/login"} element={<Login />} />
      <Route
        path="/"
        element={
          <RequireAuth
            isAuth={userIsAuthenticated()}
            redirectString={"login"}
          />
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/secure-link" element={<SecureLink />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
