import { useContext } from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";
import { IAuthContext } from "../interfaces";
import { PAGE_PATHS } from "../utils/constants";
import { ButtonLink } from "./ButtonLink";

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
              <>
                <li className="header__menus-item">
                  <ButtonLink
                    modifierClassName="link btn--icon-right"
                    text={user?.email}
                    href="/profile"
                    icon={<FaUser />}
                  />
                </li>

                <li className="header__menus-item">
                  <ButtonLink
                    modifierClassName="link"
                    href={PAGE_PATHS.notifications}
                    icon={<IoNotifications />}
                  />
                </li>
              </>
            )}

            {!isAuthenticated && (
              <li className="header__menus-item">
                <ButtonLink
                  modifierClassName="link"
                  // href={PAGE_PATHS.siginIn}//uncomment when sign in page is completed and need to navigate to that page
                  onClick={login}
                  text="Sign In"
                  icon={<FaSignInAlt />}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
