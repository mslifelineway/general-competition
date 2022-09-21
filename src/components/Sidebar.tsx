import { useContext } from "react";
import { ButtonLink } from ".";
import { IoBook } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi";
import { MdDashboard, MdOutlineTrendingUp, MdNotes } from "react-icons/md";
import { PAGE_PATHS } from "../utils/constants";
import { IDrawerContext } from "../interfaces";
import { DrawerContext } from "../context/DrawerContext";
import { ToggleButton } from "./ToggleButton";
import { useLocation } from "react-router-dom";

const menus = [
  { text: "dashboard", link: PAGE_PATHS.dashboard, icon: <MdDashboard /> },
  {
    text: "trending",
    link: PAGE_PATHS.trending,
    icon: <MdOutlineTrendingUp />,
  },
  {
    text: "Categories",
    link: PAGE_PATHS.bookCategories,
    icon: <BiCategoryAlt />,
  },
  { text: "books", link: PAGE_PATHS.books, icon: <IoBook /> },
  { text: "groups", link: PAGE_PATHS.groups, icon: <HiUserGroup /> },
  { text: "Group Sets", link: PAGE_PATHS.groupSets, icon: <MdNotes /> },
  { text: "Users", link: PAGE_PATHS.users, icon: <FaUsers /> },
];

export const Sidebar = () => {
  const location = useLocation();

  const drawerCtx: IDrawerContext | null = useContext(DrawerContext);
  const { isOpen } = drawerCtx || {};

  const pathname = location.pathname;

  return (
    <section className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <div className="sidebar__toggler-box">
        <ToggleButton />
      </div>
      <ul className="sidebar__list">
        {menus.map((menu, index) => (
          <li
            className="sidebar__list-item"
            key={`sidebar_link-${menu.link}-${index}`}
            title={menu.text}
          >
            <ButtonLink
              href={menu.link}
              text={menu.text}
              icon={menu.icon}
              modifierClassName={`button ${
                pathname === menu.link ? "btn--active" : ""
              }`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
