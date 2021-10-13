import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { actions as acaoFiltro } from 'ducks/EstadoFiltro'

const FiltroPokemon = () => {
  const dispacth = useDispatch()

  const filtro = useSelector((store) => store.filtro)

  const pegarClasse = (item) => {
    if (filtro.ativos.includes(item)) {
      return item
    } else {
      return 'desativado'
    }
  }

  const ativaTodos = () => {
    dispacth(acaoFiltro.ativaTodosFiltros())
  }

  const desativaTodos = () => {
    dispacth(acaoFiltro.desativaTodosFiltros())
  }

  const trocaFiltro = (item) => {
    // item = tipo do pokemon
    if (filtro.ativos.includes(item)) {
      dispacth(acaoFiltro.desativaFiltro(item))
    } else {
      dispacth(acaoFiltro.ativaFiltro(item))
    }
  }

  return (
    <div className="filtro-pokemon">
      <div className="botao-filtro" onClick={() => ativaTodos()}>
        Ativa Todos
      </div>
      {filtro.lista &&
        filtro.lista.map((item) => (
          <div
            onClick={() => {
              trocaFiltro(item)
            }}
            className={pegarClasse(item)}
          >
            {item}
          </div>
        ))}
      <div className="botao-filtro" onClick={() => desativaTodos()}>
        Desativa Todos
      </div>
    </div>
  )
}

export default FiltroPokemon
