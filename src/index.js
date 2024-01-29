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
const Book = () =>{
  return (
  <article className='book'>
     <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81Gvt3v-J3L._AC_UL600_SR600,400_.jpg"
        alt="How to Know a Person"
      />
      <h2>Interesting Facts For Curious Minds</h2>
      <h4>Jordan Moore </h4>
    </article>
  </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist/>)