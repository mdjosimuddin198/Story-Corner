import React, { Component, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Book from "./Book";
import { setBookToLS } from "./addLocalStorage/addBooksToLS";
// import "./addLocalStorage/setBookToLS";

const BookDetails = () => {
  const [bookInfos, setBookInfo] = useState({});
  const books = useLoaderData();

  const { bookId } = useParams();

  const handleAddToDB = (id) => {
    setBookToLS(id);
  };

  useEffect(() => {
    const id = parseInt(bookId);
    const foundBook = books.find((findbook) => findbook.bookId === id);
    setBookInfo(foundBook || {});
  }, [bookId, books]);

  const {
    bookName,
    image,
    yearOfPublishing,
    totalPages,
    author,
    category,
    tags = [],
    review,
  } = bookInfos;
  // console.log(tags);
  return (
    <div>
      <Helmet>
        <title> {bookName} details| Story-Corner</title>
      </Helmet>
      <div className="hero  min-h-screen">
        <div className="hero-content  flex-col items-center justify-center lg:flex-row">
          <div className="md:w-[35%]   p-8 rounded-md bg-[#f3f3f3]">
            <img
              src={image}
              className="max-w-sm w-56 mx-auto h-full  md:h-[350px] rounded-lg shadow-2xl"
            />
          </div>
          <div className="mt-0 p-0  md:w-[75%]  md:h-[410px]">
            <h1 className="text-5xl  font-bold">{bookName}</h1>
            <h2 className="text-2xl ">By: {author}</h2>
            <div className="border-b"></div>
            <p className="pt-2">{category}</p>
            <div className="border-b"></div>
            <p className="py-6">{review}</p>
            <div className="flex items-center  gap-4 text-[#23BE0A] font-semibold">
              <p className="text-xl">Tags: </p>
              {tags.map((tag, idx) => (
                <p className="text-center text-xl" key={idx}>
                  {tag}
                </p>
              ))}
            </div>
            <div className="flex py-4 gap-4">
              <button
                onClick={() => handleAddToDB(bookId)}
                className="btn btn-outline btn-accent"
              >
                Mark As Read
              </button>
              <button className="btn btn-success">Added To WishList</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
