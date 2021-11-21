
import { combineReducers } from 'redux'

// all Reducers 
import LoginReducer from "./reducers/LoginReducer/LoginReducer"

const root_reducer = combineReducers({
    Login : LoginReducer,
})

export default root_reducer