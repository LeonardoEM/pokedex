//se declara la libreria de react que es lo que le va a dar el formato a la apliacion las funciones como useState y useEffect que van a ayudar a darle efectos a la apliacion
//se declaran los demas archivos como la pantalla y los formatos y las estadisticas
import React, {useState,useEffect} from 'react'
import PokemonForm from './PokemonForm'
import PokedexScreen from './PokedexScreen'


//esta es la funcion del proyecto en donde primero se declaran los estados que 
// le van a dar el funcionaiento del cambio en los componentes y las busquedas 
function Pokedex(){
  const [ error, setError ] = useState(false)
  const [ loading, setLoading ] = useState(true)
  const [ pokemon, setPokemon ] = useState(null)
  const RandomId = Math.floor(Math.random() * 806 + 1)
  const [ pokemonID, setPokemonId ] = useState(RandomId)
//en el effecto se hace lo que es el llamado o cunsumo de la API y 
// la transformacion de la respuesta a un tipo de archivo que 
// se puede leer por la aplicacion y se ejecutan los estados que 
// le van a poder dar una prioridad de que mostrar en pantalla en 
// caso de que no se encuentre o que falle el llamado
    useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    .then(res => res.json())
    .then(data => {
      setPokemon(data)
      setLoading(false)
      setError(false)
    })
    .catch(err => {
      setLoading(false)
      setError(true)
    })
}, [pokemonID]);


//aqui se le da lo que es el cuerpo de la aplicacion con sus respectivos div 
// para poderlos separar en partes y organizarlos despues con la hoja de 
// estilos con los llamados a los documentos para que puedan ser 
// cupados o renderizados en la pokedex y en algunos de ellos 
// se les mandan props que son los datos o los componentes que va a 
// necesitar la sentencia
  return (
    <div className="pokedex">
      <div className="pokedex-left">
        <div className="pokedex-left-top">
          <div className={`light is-sky is-big ${loading && 'is-animated'}`}/>
          <div className="light is-red" />
          <div className="light is-yellow" />
          <div className="light is-green" />
        </div>
        <div className="pokedex-screen-container">
          <PokedexScreen
                  pokemon={pokemon}
                  loading={loading}
                  error={error}
          
                  /*pokemon={null}
                  loading={false}
                  error={null}*/
                  
                  />
        </div>
        <div className="pokedex-left-bottom">
          <div className="pokedex-left-bottom-lights">
            <div className="light is-blue is-medium" />
            <div className="light is-green is-large" />
            <div className="light is-orange is-large" />
          </div>
          <PokemonForm
            setPokemonId={setPokemonId}
            setLoading={setLoading}
            setError={setError}
          />
        </div>
      </div>
      <div className="pokedex-right-front" />
      <div className="pokedex-right-back" />
    </div>
  )
}

export default Pokedex






