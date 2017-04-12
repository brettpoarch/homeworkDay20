import {combineReducers, createStore} from 'redux'
import userReducer from './reducers/gitInfo3'

const rootReducer = combineReducers({
	userReducer
})

const store = createStore(rootReducer)

export default store