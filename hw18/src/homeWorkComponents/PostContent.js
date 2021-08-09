import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

function PostContent({ content, photo }) {
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
  );
}

PostContent.propTypes = {
  content: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  //  string.isRequired,
};

export default PostContent;
