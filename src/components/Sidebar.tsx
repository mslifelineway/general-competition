import React from "react";

export const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar__list">
        <li className="sidebar__list-item">
          <a href="/publications" className="sidebar__list-link">
            <i className="icon-basic-spread-text"></i>
            <span>Publications</span>
          </a>
        </li>
        <li className="sidebar__list-item">
          <a href="/chapters" className="sidebar__list-link">
            <i className="icon-basic-spread-text"></i>
            <span>Chapters</span>
          </a>
        </li>
        <li className="sidebar__list-item">
          <a href="/groups" className="sidebar__list-link">
            <i className="icon-basic-spread-text"></i>
            <span>Groups</span>
          </a>
        </li>
        <li className="sidebar__list-item">
          <a href="/admins" className="sidebar__list-link">
            <i className="icon-basic-spread-text"></i>
            <span>Admins</span>
          </a>
        </li>
      </div>
    </section>
  );
};
