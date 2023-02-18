import { buttonEnablesUserRoutes } from "../authenticationButtonsUtils";
import { useAuthContext } from "../../../context/AuthContext";
interface AuthenticationButtonProps {
  authenticationToken: string;
}
export const FetchAuthenticationButton = ({
  authenticationToken,
}: AuthenticationButtonProps) => {
  const { tokenFetchGet } = useAuthContext();

  return (
    <button
      onClick={() => {
        tokenFetchGet(authenticationToken);
      }}
    >
      {buttonEnablesUserRoutes(authenticationToken)
        ? "Allow user access with fetch"
        : "Disable user accesss with fetch"}
    </button>
  );
};
