import { SET_PLAYER_SONG } from "../actions";

const initialState = {
    playerSong: ''
}

const playerSongReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PLAYER_SONG:
            return {
                ...state,
                playerSong: action.payload
            }
        default:
            return state
    }
}

export default playerSongReducer