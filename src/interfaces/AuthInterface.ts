import React from 'react';
import { IUser } from "./";

export interface IAuthState {
  isAuthenticated: boolean;
  user?: IUser;
}
export interface IAuthContextProps {
  children?: React.ReactNode;
}

export interface IAuthContext {
  auth: IAuthState;
  authenticateUser: (userData: IUser) => void;
}
