import React, { createContext, FC, useEffect } from "react";
import {
  IAuthContext,
  IAuthState,
  IAuthContextProps,
  IUser,
} from "../interfaces";

const AuthContext = createContext<IAuthContext | null>(null);

const AuthContextProvider: FC<IAuthContextProps> = ({ children }) => {
  const [user, setUser] = React.useState<IUser>({});
  const [auth, setAuth] = React.useState<IAuthState>({
    isAuthenticated: false,
    user,
  });

  const authenticateUser = (userData: IUser) => {
    setUser(userData);
  };

  useEffect(() => {
    setAuth({
      isAuthenticated: user.token && user.token !== "" ? true : false,
      user,
    });
  }, [user]);

  const values: IAuthContext = {
    auth,
    authenticateUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
