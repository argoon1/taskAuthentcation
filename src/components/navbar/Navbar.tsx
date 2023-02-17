import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export const Navbar = () => {
  const { userIsAuthenticated } = useAuthContext();
  const { search } = useLocation();
  return (
    <nav>
      <ul>
        <li>
          <Link to={{ pathname: "/login", search: search }}>Login</Link>
        </li>
        {userIsAuthenticated() && (
          <>
            <li>
              <Link to={{ pathname: "/", search: search }}>Home</Link>
            </li>
            <li>
              <Link to={{ pathname: "/secure-link", search: search }}>
                Secure Link
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
