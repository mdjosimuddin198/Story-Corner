import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  // console.log(book);
  const { author, image, bookName, tags, rating, category, bookId } = book;
  return (
    <>
      <Link to={`books/${bookId}`}>
        <div className="card  shadow-sm p-6">
          <figure className="bg-[#F3F3F3] py-4 ">
            <img className=" w-[134px] h-[166px] " src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex justify-evenly gap-4 text-[#23BE0A] font-semibold">
              {tags.map((tag, idx) => (
                <p
                  className="bg-[#f3f3f3] rounded-3xl text-center p-2 "
                  key={idx}
                >
                  {tag}
                </p>
              ))}
            </div>
            <h2 className="card-title">
              {bookName}
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <h3 className="text-[15px]">By : {author}</h3>

            <div className="card-actions items-center justify-between">
              <div className="">{category}</div>
              <div className="flex gap-2">
                {rating}
                <Star></Star>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Book;
