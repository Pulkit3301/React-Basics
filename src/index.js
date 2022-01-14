import React from "react";
import ReactDOM from "react-dom";
//css
import "./index.css";
//books data
import { books } from "./books";
//book component
import Book from "./Book";
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
