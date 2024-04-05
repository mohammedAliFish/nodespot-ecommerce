import { applyMiddleware , createStore } from "redux"

import rootReducer from './reducers/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { thunk } from "redux-thunk"


const initailState = {}
const meddleware = [thunk]


const store = createStore(rootReducer , initailState ,composeWithDevTools( applyMiddleware(...meddleware)))


export default store