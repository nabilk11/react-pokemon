import React, { useState, useEffect }from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';
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
  //loading screen state | usestate is set to true to say default state is loading
  const [loading, setLoading] = useState(true)

// useEffect statement will make a new api call to whatever the new currentPageUrl is whenever it changes
// it will also be setting new pokemon data based on the new page url, which will display 20 different pokemon
  useEffect(() => {
    // setloading set to true, shows that before api call is made app is loading
    setLoading(true)
    let cancel
  // making api call with axios
axios.get(currentPageUrl, {
  // passing an additional argument into get request of cancel token
  cancelToken: new axios.CancelToken(c => cancel = c)
}).then(res => {
  //setLoading is set to false to show that after api call is made page is no longer loading
  setLoading(false)
  // setting next and previous page url
  setNextPageUrl(res.data.next)
  setPrevPageUrl(res.data.previous)
  // setting pokemon data
  setPokemon(res.data.results.map(p => p.name))
})
  //must return cancel token here
  return () => cancel() 
  }, [currentPageUrl])

// function for going to next page
function goToNext() {
  setCurrentPageUrl(nextPageUrl)
}
// function for going to previous page
function goToPrevious() {
  setCurrentPageUrl(prevPageUrl)

}



  // create conditional function to show that if loading is true, then it will return loading text
  if (loading) return "Pokemon are Loading..."


  return (
    <div className="App">
      <PokemonList 
      pokemon={pokemon} />
      <Pagination 
      goToNext={nextPageUrl ? goToNext : null}
      goToPrevious={prevPageUrl ? goToPrevious : null}/>
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
// adding a loading versus not loading state - to display a loading screen
// added condtional statement to show if loading is true, on slower internet for isntance, it will show text
// adding cancel token from axios - this will cancel older requests before a new request is being made
// this ensures no older data is being loaded as the new data is being requested
// need to pass new cancel token into get request and call cancel() function to return at the end of our useEffect
// need to create functions for going to next and previous pages of data - pagination
// need to add pagination page to the App - go to pagination for next steps
