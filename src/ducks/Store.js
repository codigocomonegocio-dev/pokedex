import { createStore, combineReducers } from 'redux'

import { reducer as filtro } from './EstadoFiltro'

const store = createStore(
  combineReducers({
    filtro,
  })
)

export default store
