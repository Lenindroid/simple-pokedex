import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search() {
  function preview() {}

  return (
    <div className="maximum-width search-bar">
      <label className="sr-only" for="site-search">
        Search the pokemon by its name:
      </label>
      <input
        type="search"
        placeholder="Lapras"
        id="site-search"
        name="q"
        onChange={preview}
      />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default Search;
