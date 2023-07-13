import React, { useEffect, useState } from 'react'

const getPokemonUrl = (id: number) => `https://pokeapi.co/api/v2/pokemon/${id}/`

// we only care about these two fields
interface PokemonResponse {
  id: number
  name: string
}

export default function Fetch() {
  // const [pokemon, setPokemon] = useState<PokemonResponse[]>([])

  // your task here is to fetch Pokémon from a given URL and just display its name
  // first Pokémon should be fetched when the compontent is first rendered
  // then, once user clicks on FETCH button, increment your id to fetch the next one and add it to the list

  // fetch works just as it worked in plain JavaScript, the only difference is you need to specify what the
  // type of the object is, after converting it to .json()
  // e.g. code snippet
  const fetchPokemon = async (id: number) => {
    //we fetch the Pokemon, convert it to json and we have p object of type PokemonResponse
    const p: PokemonResponse = await (await fetch(getPokemonUrl(id))).json();
    setPokemonsList([...pokemonsList, p]);
  }

  const [currentId, setCurrentId] = useState(1);
  const [pokemonsList, setPokemonsList] = useState<PokemonResponse[]>([]);

  useEffect(() => {
    fetchPokemon(currentId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchPokemon(currentId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentId])

  // return 2 elements:
  // 1st: a button which will trigger another fetch on click, for a Pokémon with next id
  // 2nd: All Pokémon stored in your list
  return (
    <div>
      <button onClick={() => setCurrentId(currentId + 1)}>FETCH</button>
      {/* display Pokémon in a list here, just display a div with its name for each Pokémon */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", margin: "20px" }}>
        {pokemonsList.map((p) => (
          <div>{p.name}</div>
        ))}
      </div>
    </div>
  )
}
