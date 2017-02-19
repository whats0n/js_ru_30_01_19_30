import $ from 'jquery'
import {START, SUCCESS, FAIL} from '../constants'

export default store => next => action => {
    if (!action.getArticle) return next(action)
    const {getArticle, type, ...rest} = action
	
    $.get(getArticle)
        .done(response => next({...rest, type: type + SUCCESS, response}))
        .fail(error => next({...rest, type: type + FAIL, error}))
}