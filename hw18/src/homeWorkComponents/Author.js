import React from 'react';
import '../App.css';
import { string } from 'prop-types';

function Author({ name, photo, nickname, date }) {
  return (
    <div className="post-author">
      <img
        className="author-img"
        src={photo}
        alt={name}
      />
      <div className="post-container">
        <h4 className="post-container__header">{name}</h4>
        <p className="post-container__p">{nickname}</p>
        <p className="post-container__p">{date}</p>
      </div>
    </div>
  );
}

Author.propTypes = {
  name: string.isRequired,
  photo: string.isRequired,
  nickname: string.isRequired,
  date: string.isRequired,
};

export default Author;
