import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { actions as acaoFiltro } from 'ducks/EstadoFiltro'

import background from 'assets/pokeball-white.svg'

const ItemPokemon = ({ url }) => {
  const dispacth = useDispatch()

  const filtro = useSelector((store) => store.filtro)

  const [info, setInfo] = useState()

  useEffect(() => {
    // Terminou de carregar a tela
    carregaItem()
  }, [])

  const carregaItem = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setInfo(data)
        dispacth(acaoFiltro.adicionarFiltro(data.types[0].type.name))
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const verificaFiltro = () => {
    let tipo = info.types[0].type.name
    // Ve se o tipo está incluso na lista de ativos
    return filtro.ativos.includes(tipo)
  }

  return (
    <>
      {info && verificaFiltro() && (
        <div className={'item-pokemon ' + info.types[0].type.name}>
          <h3>{info.name}</h3>
          <ul className="types">
            {info.types &&
              info.types.map((item) => (
                <li>
                  <span>{item.type.name}</span>
                </li>
              ))}
          </ul>
          <img className="background-image" src={background} />
          <img
            className="imagem-pokemon"
            src={info.sprites.other.dream_world.front_default}
          />
        </div>
      )}
    </>
  )
}

export default ItemPokemon
