import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
const author = "Jordan Moore";
const title = "How to Know a Person";
const img = "https://images-na.ssl-images-amazon.com/images/I/81Gvt3v-J3L._AC_UL600_SR600,400_.jpg";

function BookList() {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book title={title} img={img} />
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist/>)