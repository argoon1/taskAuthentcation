import { AuthenticationButtonProps } from "../sharedAuthenticationButtonsTypes";
import { buttonEnablesUserRoutes } from "../authenticationButtonsUtils";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
export const ParamsAuthenticationButton = ({
  authenticationToken,
}: AuthenticationButtonProps) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <button onClick={() => setSearchParams({ token: authenticationToken })}>
      {buttonEnablesUserRoutes(authenticationToken)
        ? "enable user routes with params"
        : "disable user routes with params"}
    </button>
  );
};
