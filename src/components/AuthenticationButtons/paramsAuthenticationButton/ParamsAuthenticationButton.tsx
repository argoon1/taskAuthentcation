import { buttonEnablesUserRoutes } from "../authenticationButtonsUtils";
import { useSearchParams } from "react-router-dom";
interface AuthenticationButtonProps {
  authenticationToken: string;
}
export const ParamsAuthenticationButton = ({
  authenticationToken,
}: AuthenticationButtonProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <button onClick={() => setSearchParams({ token: authenticationToken })}>
      {buttonEnablesUserRoutes(authenticationToken)
        ? "enable user routes with params"
        : "disable user routes with params"}
    </button>
  );
};
