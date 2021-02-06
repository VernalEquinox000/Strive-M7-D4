import React from "react"
import './App.css';
import Search from "./components/Search"
import Results from "./components/Results"
import { Route, Link } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <div>
        <Search />
        <Results />
      
      </div>
    </div>
  );
}

export default App;
