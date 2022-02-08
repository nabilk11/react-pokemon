import React, { useState, useEffect }from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import axios from 'axios';

function App() {
  // need to create state for Pokemon
  //pokemon = pokemon data setPokemon = method by which we will update pokemon
  const [pokemon, setPokemon] = useState([]);



// making api call with axios
axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
  setPokemon(res.data.results.map(p => p.name))
})


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
// see pokemon list.jsx for additional steps for rendering list and adding pokemon prop
// next step installed and imported axios for api call - using it to make api call from pokemon api
// making api call with axios and using that to setstate
// then we need to remove the example pokemon from the useState back to an empty array
// importing useEffect
