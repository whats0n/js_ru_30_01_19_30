import {FILTER_ARTICLES_ID} from '../constants'

export default (selection = null, action) => {
	const {type, payload} = action;

    switch (type) {
        case FILTER_ARTICLES_ID:
            return payload.id;
    }

    return selection;
}