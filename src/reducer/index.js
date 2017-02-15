import {combineReducers} from 'redux';
import counterReducer from './counter';
import articles from './articles';
import filterID from './filterID';
import filterDate from './filterDate';

export default combineReducers({
    count: counterReducer,
    articles,
    filteredID: filterID,
    filteredDate: filterDate
});