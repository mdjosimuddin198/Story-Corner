import { Helmet } from "react-helmet-async";
import { findBookToLS } from "./addLocalStorage/addBooksToLS";

const ReadList = ({ book, bookIdFromLB, setBookIdFromLB }) => {
  // console.log(book);
  const {
    bookId,
    bookName,
    image,
    yearOfPublishing,
    totalPages,
    author,
    category,
    tags = [],
    review,
  } = book;

  // const removeItemsFromLB = (removeid) => {
  //   console.log(removeid);
  //   const data = findBookToLS();
  //   const IdArray = data;
  //   if (IdArray) {
  //     const dataLb = IdArray.filter((id) => id !== removeid.toString());
  //     localStorage.setItem("bookId", JSON.stringify(dataLb));
  //   }
  // };

  const removeItemsFromLB = (removeid) => {
    const updatedBooks = bookIdFromLB.filter(
      (book) => book.bookId !== removeid
    );

    console.log(updatedBooks);

    setBookIdFromLB(updatedBooks);

    const onlyId = updatedBooks.map((book) => book.bookId);
    localStorage.setItem("bookId", JSON.stringify(onlyId));
  };
  return (
    <>
      <Helmet>
        <title> read-list | Story-Corner</title>
      </Helmet>
      <div className="hero  ">
        <div className="hero-content  flex-col items-center justify-center lg:flex-row">
          <div className=" p-8 rounded-md bg-[#f3f3f3]">
            <img
              src={image}
              className="max-w-sm w-[100px] mx-auto h-full  md:h-[160px] rounded-lg shadow-2xl"
            />
          </div>
          <div className="mt-0 p-0   md:h-[210px]">
            <h1 className="text-5xl  font-bold">{bookName}</h1>
            <h2 className="text-2xl ">By: {author}</h2>
            <div className="border-b"></div>
            <p className="pt-2">{category}</p>
            <div className="border-b"></div>

            <div className="flex items-center  gap-4 text-[#23BE0A] font-semibold">
              <p className="text-xl">Tags: </p>
              {tags.map((tag, idx) => (
                <p className="text-center text-xl" key={idx}>
                  {tag}
                </p>
              ))}
              <button
                onClick={() => removeItemsFromLB(bookId)}
                className="btn btn-soft btn-accent "
              >
                Delete
              </button>
            </div>
            {/* <div className="flex py-4 gap-4">
              <button
                onClick={() => handleAddToDB(bookId)}
                className="btn btn-outline btn-accent"
              >
                Mark As Read
              </button>
              <button className="btn btn-success">Added To WishList</button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadList;
