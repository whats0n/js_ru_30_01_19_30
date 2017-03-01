import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, LOAD_COMMENTS} from '../constants'
import {arrayToMap} from '../utils'
import {DefaultReducerState} from './helpers'
import {Record, Map} from 'immutable'

const CommentModel = Record({
    id: null,
    user: null,
    text: null
})

const defaultState = new DefaultReducerState()


export default (state = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentModel({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrayToMap(response, CommentModel))

        case LOAD_COMMENTS + SUCCESS:
        	console.log(response, payload, 'LOOOOOOOOOAD')
        	const currentPage = payload.page;
        	const pageComments = response.records.map(comment => comment.id);
        	return state
        		.setIn(['pages', currentPage], new Map({comments: pageComments}))
				.mergeIn(['entities'], arrayToMap(response.records, CommentModel))
        		.set('total', response.total)
        		.set('current', currentPage)

    }

    return state
}