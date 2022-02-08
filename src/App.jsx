import React, { useState, useEffect }from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import axios from 'axios';

function App() {
  // need to create state for Pokemon
  //pokemon = pokemon data setPokemon = method by which we will update pokemon
  const [pokemon, setPokemon] = useState([]);
  // creating state for changing pages to view additional pokemon
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  // creating state for nextPageUrl and prevPageUrl
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();


// useEffect statement will make a new api call to whatever the new currentPageUrl is whenever it changes
// it will also be setting new pokemon data based on the new page url, which will display 20 different pokemon
  useEffect(() => {
  // making api call with axios
axios.get(currentPageUrl).then(res => {
  // setting next and previous page url
  setNextPageUrl(res.data.next)
  setPrevPageUrl(res.data.previous)
  // setting pokemon data
  setPokemon(res.data.results.map(p => p.name))
})
  }, [currentPageUrl])




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
// importing useEffect - each time something happens and we want to rerender our application when it does happen
// the effect in this case is the api call 
// must add an empty array to the last argument in useEffect in order to prevent it from rerendering
// useEffect will continuously run each time one of these arguments change, an empty array will not change so it will only render once
// moved axios api call into the useEffect function
// created state array for changing page urls, passed the api url into the useState and set axios.get value to currentPageUrl
// also moved currentPageUrl into the empty array in useEffect - this means that everytime the currentPageUrl changes,
// then the useEffect will run again, and perform the axios api call for the new currentPageUrl
// adding change of next and previous page url to our axios api call withing the useEffect function
// this will change the data based on the properties of next and previous given to us from the api using res.data.next/previous