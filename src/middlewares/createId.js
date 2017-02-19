import {ADD_COMMENT} from '../constants'
import store from '../store'
import {mapToArr} from '../utils'

export default store => next => action => {
	if (!action.addComment) return next(action);
	//.length плохая идея, никаких гарантий уникальности, что будет если удалить коммент?
   	let comments = mapToArr(store.getState().comments).map(comment => comment.id);
   	let maxId = Math.max(...comments);
   	let id = maxId + 1;
    next({...action, id})
}
