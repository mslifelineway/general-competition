import { useContext } from "react";
import { ButtonLink } from ".";
import { IoBook } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { MdDashboard, MdOutlineTrendingUp, MdNotes } from "react-icons/md";
import { PAGE_PATHS } from "../utils/constants";
import { IDrawerContext } from "../interfaces";
import { DrawerContext } from "../context/DrawerContext";
import { ToggleButton } from "./ToggleButton";

const menus = [
  { text: "dashboard", link: PAGE_PATHS.dashboard, icon: <MdDashboard /> },
  {
    text: "trending",
    link: PAGE_PATHS.trending,
    icon: <MdOutlineTrendingUp />,
  },
  { text: "publications", link: PAGE_PATHS.publications, icon: <IoBook /> },
  { text: "groups", link: PAGE_PATHS.groups, icon: <HiUserGroup /> },
  { text: "Group Sets", link: PAGE_PATHS.groupSets, icon: <MdNotes /> },
  { text: "Users", link: PAGE_PATHS.users, icon: <FaUsers /> },
];

export const Sidebar = () => {
  const drawerCtx: IDrawerContext | null = useContext(DrawerContext);
  const { isOpen } = drawerCtx || {};

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
            <ButtonLink href={menu.link} text={menu.text} icon={menu.icon} />
          </li>
        ))}
      </ul>
    </section>
  );
};
