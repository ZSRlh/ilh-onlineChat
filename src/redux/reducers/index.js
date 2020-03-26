import { combineReducers } from 'redux'
import user from './user'
import ws from './ws'

export default combineReducers({ user, ws })