import pageLogo from "/images/logo.png";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [typed, setTyped] = useState("");
  return (
    <>
      <header>
        <img src={pageLogo} className="logo" alt="Simple Pokedex" />
      </header>
      <Search typed={typed} setTyped={setTyped}></Search>
    </>
  );
}

export default App;
