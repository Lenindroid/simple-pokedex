import pageLogo from "/images/logo.png";
import Search from "./components/search";

function App() {
  return (
    <>
      <header>
        <img src={pageLogo} className="logo" alt="Simple Pokedex" />
      </header>
      <Search></Search>
    </>
  );
}

export default App;
