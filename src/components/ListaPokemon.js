import React, { useEffect, useState } from 'react'

import ItemPokemon from './ItemPokemon'

const ListaPokemon = () => {
  const [lista, setLista] = useState([])

  useEffect(() => {
    // Terminou de carregar a tela
    carregaLista()
  }, [])

  const carregaLista = () => {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=551'

    fetch(url) // Padrão GET
      .then((resp) => resp.json()) // Converte para JSON
      .then((data) => {
        setLista(data.results)
      }) // Ler Data = arquivo json
      .catch((error) => {
        // Em caso de erro
        console.log(error)
      })
  }

  return (
    <div className="lista-pokemon">
      {lista &&
        lista.map((item) => (
          /*
          Rodou a primeira vez: item = n1
          Rodou a segunda vez: item = n2
          ...
          */
          // Cada item da lista
          <ItemPokemon url={item.url} />
        ))}
    </div>
  )
}

export default ListaPokemon
