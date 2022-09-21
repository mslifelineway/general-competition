export interface IUser {
  [name: string]: string;
  // [email: string]: string;
  // [token: string]: string;
}

export interface IAuthState {
  isAuthenticated: boolean;
  user?: IUser;
}
export interface IAuthContextProps {
  children?: React.ReactElement;
}

export interface IAuthContext {
  auth: IAuthState,
  authenticateUser: (userData: IUser) => void;
}
