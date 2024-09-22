import { thunk } from 'redux-thunk'
import reducers from './reducers'

import { createStore,applyMiddleware } from 'redux'
const midllewares=[thunk]

export default createStore(reducers,applyMiddleware(...midllewares))