import {DELETE_ARTICLE, LOAD_ALL_ARTICLES, FAIL, SUCCESS, START, ADD_COMMENT, LOAD_ARTICLE_TEXT} from '../constants'
import {arrayToMap, mapToArr} from '../utils'

const defaultState = {
    isLoading: false,
    entities: arrayToMap([])
}


export default (state = defaultState, action) => {
    const {type, payload, articleID} = action
    //в {...state} нет никакого смысла
    // const newState = {...state}; //было так - осознал ошибку
    const newState = JSON.parse(JSON.stringify(state)); //сделал клонирование, так норм будет?
    const currentArticle = newState.entities[articleID];
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
            let {id} = action;
            //вот здесь ты, на самом деле, мутируешь стейт. Все просто меняется по ссылке
            currentArticle.comments.push(id);
            return newState
        case LOAD_ARTICLE_TEXT + SUCCESS:
            let {response} = action;
            currentArticle.text = response.text;
            return newState
    }

    return state
}
