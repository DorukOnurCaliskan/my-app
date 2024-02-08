import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
const firstBook = {
  author: "Jordan Moore",
  title: "Interesting Facts For Curious Minds",
  img: "./images/book-1.jpg",
};
const secondBook = {
  author: "James Clear",
  title: "How to Know a Person",
  img: "https://images-na.ssl-images-amazon.com/images/I/81Gvt3v-J3L._AC_UL600_SR600,400_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);
        return (
          <div>
            <h2>{book.title}</h2>
          </div>
        );
      })}
    </section>
  );
}
const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
    </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist/>)