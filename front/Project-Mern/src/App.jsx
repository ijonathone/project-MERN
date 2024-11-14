import "./App.css";
import {useState} from 'react'

function App(){
const [name, setName] = useState('Jonathan');
console.log (name);

const changeName = () => {
  if (name === "Jonathan" setName "Dario")
}
  



  return (
    <>
      <h1> Hola, soy {name}</h1>
      <button onClick={changeName}>Cambiar</button>
    </>
  );
}

export default App;
