import {INCREMENT, DELETE_ARTICLE, FILTER_ARTICLES_ID, FILTER_ARTICLES_DATE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }

    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function filteredArticlesID(id) {
    return {
        type: FILTER_ARTICLES_ID,
        payload: { id }
    }
}

export function filteredArticlesDate(dateFrom, dateTo) {
    return {
        type: FILTER_ARTICLES_DATE,
        payload: { 
			dateFrom: dateFrom,
			dateTo: dateTo
        }
    }
}