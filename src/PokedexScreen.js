//delaracion de los compoentes que va a ocupar
import Stat from './Stat'
import ErrorPokemon from './error.gif'
import LoadingPokemon from './carga.gif'
// aqui en esta funcion la funcion que hace es de funcionamiento 
// y dedarle el cuerpo a las imagenes que se van a desplegar ocupando los estados que se alojan en el directorio Pokemon.Js
// y en donde va a dar la impresion de las imagenes
function PokedexScreen({ pokemon, loading, error }){


  if (loading) return <p>Cargando Pokémon...</p>;
  if (error) return <p>Error al cargar Pokémon.</p>;
  if (!pokemon) return <p>Sin datos aún.</p>;
  if(error){
    return (
      <div className="pokedex-screen">
        <img
          src={ErrorPokemon}
          alt="Hubo un error buscando tu pokemon"
          className="pokedex-no-screen"
        />
      </div>
    )
  }
  //en este se ejecutan lo que es la decision de si hay o 
  // no hay pokemos y si lo hay lo imprime en cambio si no 
  // lo hay no imprime nada y recaba toda la informacion 
  // de los llamados de la API
  return (
    <div className="pokedex-screen">
      { !pokemon || loading ? // Si no hay pokemon o si esta cargando
        <img
          src={LoadingPokemon}
          alt="Aún no hay ningun pokemon"
          className="pokedex-no-screen"
        /> : // Todo cool, entonces devuelve un lindo pokemon
        <div className="pokemon-info">
          <h2 className="pokemon-name">{pokemon.name}</h2>
          <img
            className="pokemon-img"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <ul className="pokemon-stats">
            {pokemon.stats.map(item => <Stat key={item.stat.name} item={item}/>)}
          </ul>
        </div>
      }
    </div>
  )


  
}

export default PokedexScreen
