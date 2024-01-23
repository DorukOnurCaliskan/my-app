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
  return <article className='book'>
    <Image />
    <Title />
    <Author/>
  </article>
}

const Image = () => 
<img
    src="https://images-na.ssl-images-amazon.com/images/I/81Gvt3v-J3L._AC_UL600_SR600,400_.jpg"
    alt="How to Know a Person"
  />
const Title = () => <h2>How to Know a Person</h2>
const Author = () =>{
  return <h4>David Brooks</h4>
} 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Booklist/>)