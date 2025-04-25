import React from "react";
import { Helmet } from "react-helmet-async";

const ListedBooks = () => {
  return (
    <div className="min-h-[calc(100vh-140px)] ">
      <Helmet>
        <title> Listed-books | Story-Corner</title>
      </Helmet>
      <h3>our books here </h3>
    </div>
  );
};

export default ListedBooks;
