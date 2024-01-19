import { LOGIN, LOGOUT, ADD_TO_LIKED, REMOVE_FROM_LIKED } from "../actions"

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
        case ADD_TO_LIKED:
            return {
                ...state,
                login: {
                    ...state.login,
                    likedSongs: [...state.login.likedSongs, action.payload],
                },
            };
        case REMOVE_FROM_LIKED:
            return {
                ...state,
                login: {
                    ...state.login,
                    likedSongs: state.login.likedSongs.filter(
                        (song) => song !== action.payload
                    ),
                },
            };
        default:
            return state
    }
}

export default userReducer