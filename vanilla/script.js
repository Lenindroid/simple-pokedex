const searchInput = document.getElementById('site-search');
const resultsGrid = document.getElementById('results-grid');
let pokemonList = [];

async function fetchPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    if (!response.ok) {
      throw new Error("We couldn't fetch the list.");
    }
    const data = await response.json();
    pokemonList = data.results;
    renderPokemon("");
  } catch (error) {
    console.log(error);
  }
}

function renderPokemon(typed) {
  resultsGrid.innerHTML = "";
  
  // Use a document fragment for better performance since we might append many elements
  const fragment = document.createDocumentFragment();

  pokemonList.forEach(pokemon => {
    if (pokemon.name.includes(typed) === false) {
      return;
    }
    
    // Extract ID from url
    const urlParts = pokemon.url.split("/").filter(Boolean);
    const id = urlParts.pop();

    const article = document.createElement('article');
    article.className = 'pokemon-card';
    
    const h2 = document.createElement('h2');
    h2.className = 'font-pixel';
    h2.textContent = pokemon.name;
    
    const img = document.createElement('img');
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    img.alt = pokemon.name;
    img.onerror = (e) => {
      e.target.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";
      e.target.onerror = null;
    };
    
    article.appendChild(h2);
    article.appendChild(img);
    fragment.appendChild(article);
  });

  resultsGrid.appendChild(fragment);
}

// Add event listener for the search bar
searchInput.addEventListener('input', (e) => {
  renderPokemon(e.target.value);
});

// Initial fetch
fetchPokemon();
