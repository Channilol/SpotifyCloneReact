import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducers/user";
import fetchReducer from "../reducers/fetch";
import playerSongReducer from "../reducers/playerSong";

const mainReducer = combineReducers({
    login: userReducer,
    fetch: fetchReducer,
    playerSong: playerSongReducer
})

const store = configureStore({
    reducer: mainReducer
})

export default store