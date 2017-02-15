import {FILTER_ARTICLES_ID} from '../constants'
//не дроби редюсеры слишком сильно: объедини селект и календарь в один
export default (selection = null, action) => {
	const {type, payload} = action;

    switch (type) {
        case FILTER_ARTICLES_ID:
            return payload.id;
    }

    return selection;
}
