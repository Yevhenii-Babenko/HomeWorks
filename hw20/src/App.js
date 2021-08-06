import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Timer
        time="60"
        autostart={false}
        onTick={(time) => console.log("Залишилось часу: " + time)}
        step="1000"
      />
    </div>
  );
}

export default App;
