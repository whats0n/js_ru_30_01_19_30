import {ADD_COMMENT, LOAD_COMMENTS, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {Record, Map} from 'immutable'

const CommentModel = Record({
	id: null,
	text: null,
	user: null
})

const defaultState = new Map()

export default (state = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn([randomId], new CommentModel({...payload.comment, id: randomId}) )
        case LOAD_COMMENTS + SUCCESS:
        	return state.merge(arrayToMap(response, CommentModel))
    }

    return state
}