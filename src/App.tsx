import React from "react";
import "./App.css";
import {
  Dashboard,
  Groups,
  GroupSets,
  Landing,
  Notifications,
  Page404,
  Profile,
  Books,
  Trending,
  Users,
} from "./containers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PAGE_PATHS } from "./utils/constants";
import { BookCategories } from "./containers/BookCategories";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={PAGE_PATHS.root} element={<Landing />} />
          <Route path={PAGE_PATHS.dashboard} element={<Dashboard />} />
          <Route path={PAGE_PATHS.groups} element={<Groups />} />
          <Route path={PAGE_PATHS.groupSets} element={<GroupSets />} />
          <Route path={PAGE_PATHS.notifications} element={<Notifications />} />
          <Route path={PAGE_PATHS.profile} element={<Profile />} />
          <Route path={PAGE_PATHS.books} element={<Books />} />
          <Route
            path={PAGE_PATHS.bookCategories}
            element={<BookCategories />}
          />
          <Route path={PAGE_PATHS.trending} element={<Trending />} />
          <Route path={PAGE_PATHS.users} element={<Users />} />
          <Route path={PAGE_PATHS.notFound} element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
