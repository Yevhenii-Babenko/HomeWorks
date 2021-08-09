import './App.css';
import React from 'react';

/* 
const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale"; */

/* const postOwner = {
  name: "Anakin skywalker",
  photo: ANAKIN_IMAGE,
  nickname: "@dart_vader",
  date: "26 лют.",

};
const contText = {
  content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  photo: RAY_IMAGE,
}; */

/* function App() {
  return (
    <div className="post" style={{backgroundColor: "#15202B"}}>
      <Author {...postOwner} />
      <PostContent {...contText} />
      </div>
  );
}

const Author = ({name, photo, nickname, date}) => {
  return(
    <div className="post-author">
        <img 
        className="author-img"
        src={ photo }
        alt={ name } />
        <div className="post-container">
          <h4 className="post-container__header">{ name }</h4>
          <p className="post-container__p">{ nickname }</p>
          <p className="post-container__p">{ date }</p>
        </div>
      </div>
  )
}

const PostContent = ({ content, photo }) => {
  return(
    <div className="post-content">
      <div className="post-text">
        <p className="post-text_p">{ content }</p>
      </div>
        <img 
          className="content-img" 
          src={ photo }
          alt="Ray"
          />
      </div>
  )
  
} */
/* const availableColors = [
  { id: 1, name: 'red', hex: '#FF0000' },
  { id: 2, name: 'green', hex: '#00FF00' },
  { id: 3, name: ' blue', hex: '#0000FF' }
]; 

class App extends React.Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    console.log('Mounted App');
    setTimeout(() => {
      this.setState({ index:  });
    }, 1500);
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevProps, prevState);
    console.log('Update App');
  }
  render() {
    const { index } = this.state;
    const currentColor = availableColors[index];

    return (
      <div>
        <h1>Test color</h1>
          {currentColor && (
            <ColorInfo color={currentColor} />
          )}
    </div>
    )
  }
} */

class App extends React.Component {
  state = {
    words: ['one', 'two', 'three', 'four', 'five'],
  };

  render() {
    const { words } = this.state;

    return(
      <div>
        <h1>Handling events in a list</h1>
          <ul>
            {words.map(word => (
              <li 
                key={word}
                onClick={()=>{
                  console.log(word)
                }}
              >
                {word}
              </li>))}
          </ul>
      </div>
    )
  }
}

export default App;