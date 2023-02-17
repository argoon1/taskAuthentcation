export function buttonEnablesUserRoutes(authenticationToken: string) {
  return authenticationToken === import.meta.env.VITE_VALID_TOKEN;
}
