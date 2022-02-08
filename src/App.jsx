import React, { useState }from 'react';
import './App.css';
import PokemonList from './components/PokemonList';

function App() {
  // need to create state for Pokemon
  //pokemon = pokemon data setPokemon = method by which we will update pokemon
  const [pokemon, setPokemon] = useState("bulbasaur", "charmander");
  return (
    <div className="App">
      <PokemonList pokemon={pokemon} />
      
    </div>
  );
}

export default App;


// step 1 added state with useState, added two default pokemon in just for testing "bulbasaur" "charmander"
// pokemon is the data that we will need setPokemon is the method to update the state
// step 2 import PokemonList and added it to the App, also added the prop for pokemon so it can get the pokemon data
