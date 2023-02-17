import { Routes, Route, useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SecureLink } from "../pages/SecureLink";
import { NotFound } from "../pages/NotFound";
export const Navigation = () => {
  const { userIsAuthenticated } = useAuthContext();
  return (
    <Routes>
      <Route path={"/login"} element={<Login />} />
      {userIsAuthenticated() && (
        <>
          <Route path={"/"} element={<Home />} />
          <Route path={"/secure-link"} element={<SecureLink />} />
        </>
      )}
      <Route path={"/*"} element={<NotFound />} />
    </Routes>
  );
};
