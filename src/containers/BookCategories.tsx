import React from "react";
import { BookCategoryTable, Layout } from "../components";

export const BookCategories = () => {
  return (
    <Layout>
      <>
        <p>Book categories</p>
        <BookCategoryTable />
      </>
    </Layout>
  );
};
