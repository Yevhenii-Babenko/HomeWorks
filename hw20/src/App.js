import './App.css';
import CountdownTimerList from './components/CountdownTimerList'

function App() {
  return (
    <div className="App">
      <CountdownTimerList 
        time="5"
        autostart={false}
        onTick={(time) => console.log("Залишилось часу: " + time)}
        step="1000"
        onTimeEnd={() => console.log("Час вийшов!")}
        onTimePause={(timeLeft) => console.log("Таймер на паузі!")}
      />
    </div>
  );
}

export default App
