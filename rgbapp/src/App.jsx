import { useState } from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import History from './components/History';

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [history, setHistory] = useState([]);

  const backgroundColor = (r, g, b) => `rgb(${r},${g}, ${b})`;

  return (
    <>
    <ColorBox backgroundColor={backgroundColor(red, green, blue)}/>
    <h4>Red: {red}</h4>
      <input type="range" min={0} max={255} 
      onChange={({target}) => setRed(parseInt(target.value))} />

    <h4>Green: {green}</h4>
      <input type="range" min={0} max={255} 
      onChange={({target}) => setGreen(parseInt(target.value))} />

    <h4>Blue: {blue}</h4>
      <input type="range" min={0} max={255} 
      onChange={({target}) => setBlue(parseInt(target.value))} />
      <br></br>
      <button onClick={() => setHistory((h) => [[red, green, blue], ...h])}>Adicionar cor ao histórico</button>
    
    <History data={history} backgroundColor={backgroundColor} />
    </>
  )
}

export default App
