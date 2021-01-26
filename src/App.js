import React from "react";
import './App.css';
import FilmBox from "./containers/FilmBox";

function App() {
  return (
    <>
    <FilmBox />
    <form action="https://www.imdb.com/calendar/?region=gb">
    <input type="submit" value="View more upcoming releases"></input>
  </form>
</>
  );
}

export default App;
