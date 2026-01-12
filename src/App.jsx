import pageLogo from "/images/logo.png";
import Search from "./components/Search";
import { useState, useEffect } from "react";

function App() {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
        );
        if (!response.ok) {
          throw new Error("We couldn't fetch the list.");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemon();
  }, []);

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
