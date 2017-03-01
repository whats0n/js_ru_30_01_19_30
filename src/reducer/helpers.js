import {Record, Map} from 'immutable'

export const DefaultReducerState = Record({
    isLoading: false,
    entities: new Map({}),
    pages: new Map({}),
    total: null,
    current: null
})