import React from 'react';

export default function PokemonList({ pokemon } ) {
  return (
  <div>
{pokemon.map(p => (
<div key={p} className="pokemon">{p}</div>
))}
  </div>
  )
}

// passed in the prop of pokemon into the PokemonList function because thats the data we want to provide to the App when we export
// instead of using { pokemon } as the prop we could use props
// then we could put props.pokemon right under it - because its only just pokemon we can put that straight into where we would have the prop

// adding the pokemon.map function to loop over the array of pokemon names and returns a div with each individual pokemon's name
// when looping over an array using map in react, must add a key={} to the top level function
// key must be unique to each individual, this could be the index or in this case it will also be p (the name of the pokemon)
// we are using p as the key becasue there wont be any doubles and each name will; be unique.

