import React, { Children } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../components/Root";
import ErrorMsg from "./ErrorMsg";
import ListedBooks from "../components/ListedBooks";
import PageToRead from "../components/PageToRead";
import Banar from "../components/Banar";
import BookDetails from "../components/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorMsg></ErrorMsg>,

    children: [
      {
        index: true,
        path: "/",
        loader: async () => {
          const res = await fetch(
            "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/main/data/booksData.json"
          );
          const data = await res.json();
          return data;
        },
        Component: Banar,
      },
      {
        path: "pages-to-read",
        loader: () => fetch("/booksData.json"),
        Component: PageToRead,
      },
      {
        path: "listed-books",
        Component: ListedBooks,
      },
      {
        path: "books/:bookId",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
