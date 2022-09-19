import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { IAuthContext } from "../interfaces";

export const Header = () => {
  const authCtx: IAuthContext | null = useContext(AuthContext);
  const { auth, authenticateUser } = authCtx || {};
  const { isAuthenticated, user } = auth || {};

  const login = () => {
    const fakeUser = {
      name: "Mukesh Kumar",
      email: "mukeshms40003@gmail.com",
      token: "somethingtokenwillbehere...",
    };
    authenticateUser && authenticateUser(fakeUser);
  };

  return (
    <section className="header">
      <div className="header__content">
        <div className="u-grow-1"></div>
        <div className="header__right">
          <ul className="header__menus">
            {isAuthenticated && (
              <li className="header__menus-item">
                <div className="header__user">
                  <span className="header__user-name">{user?.email}</span>
                  <span className="header__user-icon">
                    <FaUser />
                  </span>
                </div>
              </li>
            )}

            {!isAuthenticated && (
              <li className="header__menus-item">
                {/* <a href={PAGE_PATHS.siginIn} >Sign In</a> */}
                {/* ABOVE LINE WILL BE THERE AND BELOW LINES WILL BE REMOVED WHEN SIGNIN PAGE WILL BE CREATED AND IMPLEMENTED */}
                <div className="header__user" onClick={login}>
                  <span className="header__user-name">Sign In</span>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
