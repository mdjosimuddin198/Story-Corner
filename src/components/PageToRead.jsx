import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "./ReadList";
import { useLoaderData } from "react-router";
import { findBookToLS } from "./addLocalStorage/addBooksToLS";
const PageToRead = () => {
  const [bookIdFromLB, setBookIdFromLB] = useState([]);

  const booksData = useLoaderData();

  useEffect(() => {
    const storedDataLB = findBookToLS();
    const storeId = storedDataLB.map((id) => parseInt(id));
    const myReadList = booksData.filter((book) =>
      storeId.includes(book.bookId)
    );
    setBookIdFromLB(myReadList);
  }, []);

  return (
    <div className="min-h-[calc(100vh-140px)]">
      <Tabs className="my-7">
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>WishList Books</Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col items-center justify-center">
            {bookIdFromLB.map((book) => (
              <ReadList
                bookIdFromLB={bookIdFromLB}
                setBookIdFromLB={setBookIdFromLB}
                book={book}
                key={book.bookId}
              ></ReadList>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My WishList</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PageToRead;
