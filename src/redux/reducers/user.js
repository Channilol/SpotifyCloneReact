import { LOGIN, LOGOUT } from "../actions"

const initialState = {
    login: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                login: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                login: action.payload
            }
        default:
            return state
    }
}

export default userReducer