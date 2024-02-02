import { useState, createContext, useContext, useEffect } from "react";
import { useJwt } from "react-jwt";

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  decodedToken: {},
  accessLevel: "",
});
export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const token = sessionStorage.getItem("_tk");
  const { decodedToken, isExpired } = useJwt(token || "");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessLevel, setAccessLevel] = useState("");

  useEffect(() => {
    if (token && !isExpired) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token, isExpired]);

  useEffect(() => {
    if (decodedToken) {
      if (
        decodedToken.role.length === 1 &&
        decodedToken.role.indexOf("lvl1") === 0
      ) {
        setAccessLevel("basic");
      } else {
        setAccessLevel("pro");
      }
    }
  }, [decodedToken]);

  const values = {
    isLoggedIn,
    setIsLoggedIn,
    decodedToken,
    accessLevel,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
