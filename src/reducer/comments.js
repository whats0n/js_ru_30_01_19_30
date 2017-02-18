import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap} from '../utils'
import {ADD_COMMENT} from '../constants'

const defaultState = arrayToMap(defaultComments)


export default (state = defaultState, action) => {
    const {type, payload, id} = action

    switch (type) {
		case ADD_COMMENT:
			return {...state, [id]: { id, ...payload }}
    }

    return state
}