import React, { useState } from 'react'

import ListaPokemon from 'components/ListaPokemon'
import FiltroPokemon from 'components/FiltroPokemon'

const Home = () => {
  const [lista, setLista] = useState([])

  return (
    <section className="home">
      <h1>Pokedex</h1>
      <FiltroPokemon />
      <ListaPokemon lista={lista} />
    </section>
  )
}

export default Home
