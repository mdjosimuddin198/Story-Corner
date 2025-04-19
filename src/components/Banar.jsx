import React from "react";
import { useLoaderData } from "react-router";
import Book from "./Book";

const Banar = () => {
  const books = useLoaderData();
  // console.log(books);

  return (
    <div>
      <main>
        <section className="hero w-[80%] mx-auto mt-4 rounded-2xl bg-[#13131305] min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="/pngwing 1.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-6xl font-bold my-4">
                Books to freshen up <br /> your bookshelf
              </h1>

              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-semibold text-center p-4">Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {books.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Banar;
