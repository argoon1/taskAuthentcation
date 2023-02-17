import React, { createContext, useContext, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
interface AuthContext {
  tokenFetchGet: (tokenFetchString: string) => void;
  userIsAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContext>({
  userIsAuthenticated: () => false,
  tokenFetchGet: () => {},
});

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthContextProvider(props: React.PropsWithChildren<{}>) {
  const [routesEnabled, setRoutesEnabled] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const navigate = useNavigate();
  function userIsAuthenticated() {
    if (routesEnabled || import.meta.env.VITE_VALID_TOKEN === token) {
      if (import.meta.env.VITE_INVALID_TOKEN === token) return false;
      return true;
    }
    return false;
  }
  async function tokenFetchGet(tokenGetString: string) {
    try {
      const response = await fetch(
        import.meta.env.VITE_ROUTES_AUTH + `/tokens`
      );
      const data = await response.json();
      setRoutesEnabled(data[tokenGetString]);
    } catch (e) {
      setRoutesEnabled(false);
    } finally {
      navigate(".", { replace: true });
    }
  }

  return (
    <AuthContext.Provider
      value={{ userIsAuthenticated, tokenFetchGet }}
      {...props}
    />
  );
}
