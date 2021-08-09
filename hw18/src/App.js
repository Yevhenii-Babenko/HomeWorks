import './App.css';
import React from 'react';

/* import { ProductList } from './components/product/ProductList';
import { Theme } from './components/product/Theme';

import productsFromServer from './data/product.json'; */

/* const availableColors = [
  { id: 1, name: 'red', hex: '#FF0000' },
  { id: 2, name: 'green', hex: '#00FF00' },
  { id: 3, name: ' blue', hex: '#0000FF' }
];
 */


const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale"; * /

const postOwner = {
  name: "Anakin skywalker",
  photo: ANAKIN_IMAGE,
  nickname: "@dart_vader",
  date: "26 лют.",

};
const contText = {
  content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  photo: RAY_IMAGE,
};

export default function App() {
  return (
    <div className="post" style={{ backgroundColor: "#15202B" }}>
      <Author {...postOwner} />
      <PostContent {...contText} />
    </div>
  );
}

const Author = ({ name, photo, nickname, date }) => {
  return (
    <div className="post-author">
      <img
        className="author-img"
        src={photo}
        alt={name} />
      <div className="post-container">
        <h4 className="post-container__header">{name}</h4>
        <p className="post-container__p">{nickname}</p>
        <p className="post-container__p">{date}</p>
      </div>
    </div>
  )
}

const PostContent = ({ content, photo }) => {
  return (
    <div className="post-content">
      <div className="post-text">
        <p className="post-text_p">{content}</p>
      </div>
      <img
        className="content-img"
        src={photo}
        alt="Ray"
      />
    </div>
  )
};



/*
Test code task
const App = () => {
  return (
  <div>
    <h1>Test products</h1>
      <ProductList products={productsFromServer}/>
  </div>
  )
}
export default App
 */
