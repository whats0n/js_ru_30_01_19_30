import {DELETE_ARTICLE, LOAD_ALL_ARTICLES, FAIL, SUCCESS, START, ADD_COMMENT} from '../constants'
import {arrayToMap, mapToArr} from '../utils'

const defaultState = {
    isLoading: false,
    entities: arrayToMap([])
}


export default (state = defaultState, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            //todo fix me
            let articles = mapToArr(state.entities).filter(article => article.id !== payload.id);
            articles = arrayToMap(articles);

            return {...state, entities: articles }

        case LOAD_ALL_ARTICLES + START:
            return {...state, isLoading: true}

        case LOAD_ALL_ARTICLES + SUCCESS:
            return {
                ...state,
                entities: arrayToMap(action.response),
                isLoading: false
            }
        case ADD_COMMENT:
            let {article, id} = action; 
            let currentArticle = state.entities[article]; //get current article by id
            currentArticle.comments.push(id) //add new comment id into comments array
            return {...state}
    }

    return state
}