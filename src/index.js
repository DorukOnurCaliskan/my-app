import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const Booklist = () => {
  return <section className='booklist'>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
}
const author = "Jordan Moore";
const Book = () => {
  const title = "Interesting Facts For Curious Mindssssss";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81Gvt3v-J3L._AC_UL600_SR600,400_.jpg"
        alt="How to Know a Person"
      />
      <h2>{title}</h2>

      <h4>{author.toUpperCase()} </h4>
      {/* <p>{let x = 6}</p> */}
      <p>{6 + 6}</p>
    </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist/>)