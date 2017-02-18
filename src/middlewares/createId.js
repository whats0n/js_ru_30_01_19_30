import {ADD_COMMENT} from '../constants'
import store from '../store'
import {mapToArr} from '../utils'

export default store => next => action => {
	if (!action.addComment) return next(action);
   	let id = mapToArr(store.getState().comments).length;
    next({...action, id})
}