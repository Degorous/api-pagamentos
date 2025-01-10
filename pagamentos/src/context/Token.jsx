import { createContext } from "react";
import useAuthentication from "../hooks/useAuthentication";

export const TokenContext = createContext()
TokenContext.displayName = 'Token'

export default function TokenProvider({ children }) {
  const { login, token } = useAuthentication()

  return (
    <TokenContext.Provider value={{ login, token }}>
      {children}
    </TokenContext.Provider>
  )
}