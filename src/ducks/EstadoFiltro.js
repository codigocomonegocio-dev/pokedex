export const types = {
  ADICIONAR_FILTRO: 'ADICIONAR_FILTRO',
  ATIVA_FILTRO: 'ATIVA_FILTRO',
  DESATIVA_FILTRO: 'DESATIVA_FILTRO',
  ATIVA_TODOS_FILTROS: 'ATIVA_TODOS_FILTROS',
  DESATIVA_TODOS_FILTROS: 'DESATIVA_TODOS_FILTROS',
}

export const actions = {
  adicionarFiltro: (value) => ({
    type: types.ADICIONAR_FILTRO,
    value: value,
  }),
  ativaFiltro: (value) => ({
    type: types.ATIVA_FILTRO,
    value: value,
  }),
  desativaFiltro: (value) => ({
    type: types.DESATIVA_FILTRO,
    value: value,
  }),
  ativaTodosFiltros: () => ({
    type: types.ATIVA_TODOS_FILTROS,
  }),
  desativaTodosFiltros: () => ({
    type: types.DESATIVA_TODOS_FILTROS,
  }),
}

const INITIAL_STATE = {
  lista: [], // <---- Todos os filtros ativos
  ativos: [], // <---- Filtros ativos
}
export const reducer = (state = INITIAL_STATE, action) => {
  // Copia o estado antigo
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case types.ADICIONAR_FILTRO:
      // Trocar o valor de acordo com a função
      if (!newState.lista.includes(action.value)) {
        newState.lista.push(action.value)
        newState.ativos.push(action.value)
      }
      break
    case types.ATIVA_FILTRO:
      if (!newState.ativos.includes(action.value)) {
        newState.ativos.push(action.value)
      }
      break
    case types.DESATIVA_FILTRO:
      newState.ativos = newState.ativos.filter((item) => {
        return item != action.value
      })
      break
    case types.ATIVA_TODOS_FILTROS:
      newState.ativos = newState.lista
      break
    case types.DESATIVA_TODOS_FILTROS:
      newState.ativos = []
      break
  }

  console.log('Filtros ativos: ' + newState.ativos)

  return newState
}
