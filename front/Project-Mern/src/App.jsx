import { Routes, Route } from "react-router-dom";
import "./App.css";
import Example from "./components/Example";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element=<Example />>
         
        </Route>
      </Routes>
    </>
  );
}

export default App;
