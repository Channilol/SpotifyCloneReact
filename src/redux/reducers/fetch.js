import { GET_FETCH, POST_FETCH, PUT_FETCH, DELETE_FETCH } from "../actions";

const initialState = {
    fetchResult: []
}

const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FETCH: 
            return {
                ...state,
                fetchResult: action.payload
            }
        case POST_FETCH:
            return state
        case PUT_FETCH:
            return state
        case DELETE_FETCH:
            return state
        default:
            return state
    }
}

export default fetchReducer