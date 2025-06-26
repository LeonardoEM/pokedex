//delaracion de los compoentes que va a ocupa
import React, { useState } from 'react'
// en esta funcion se le da la funcionalidad y el como se va a mandar para posteriormente dar la solicitud de que poquemon se le pide a la api
//y se le hace un enfasis en la transfromacion de los textos a todo minuscula para que no haya errores al mandar los datos
function PokemonForm({ setPokemonId, setLoading, setError }){
  const [ pokemon, setPokemon ] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    if(pokemon !== ''){
      setError(true)
      setLoading(true)
      const pokemonID = window.isNaN(parseInt(pokemon)) ? pokemon.toLowerCase() : pokemon
      setPokemonId(pokemonID)
      setPokemon('')
      return
    }
    setError(true)
  }

  // aqui lo que se hace es la imput
  return (
    <form className="pokemon-form" onSubmit={handleSubmit}>
      <input
        className="pokemon-input"
        type="text"
        name="pokemon"
        value={pokemon}
        placeholder="Busca tu pokemon"
        onChange={e => setPokemon(e.target.value)}
        autoComplete="off"/>
      <input type="submit" className="pokemon-btn" value=""/>
    </form>
  )
}

export default PokemonForm



//const [ pokemon, setPokemon ] = useState('')