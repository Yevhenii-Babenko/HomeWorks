import './App.css';

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

/* const postContent = {
        name: "Anakin skywalker",
        nickname: "@dart_vader",
        textContent: {
            content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
            date: "26 лют."
        }
} */

function App(props) {
  return (
    <div className="post" style={{backgroundColor: "#15202B"}}>
      <img 
        className="author-img"
        src={ANAKIN_IMAGE}
        alt="Anakin skywalker" />
        <div className="post-content">
          <div className="post-text"></div>
              <img 
                className="content-img" 
                  src={RAY_IMAGE}
                  alt="Ray"
                />
          </div>
      </div>
  );
}

export default App;
