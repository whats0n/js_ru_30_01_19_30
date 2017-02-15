import {FILTER_ARTICLES_DATE} from '../constants'

export default (date = {dateFrom: null, dateTo: null}, action) => {
	const {type, payload} = action;

    switch (type) {
        case FILTER_ARTICLES_DATE:
            return {
            	dateFrom: payload.dateFrom,
            	dateTo: payload.dateTo
            };
    }

    return date;
}