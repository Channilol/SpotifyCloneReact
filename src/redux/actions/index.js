export const GET_FETCH = 'GET_FETCH'
export const POST_FETCH = 'POST_FETCH'
export const PUT_FETCH = 'PUT_FETCH'
export const DELETE_FETCH = 'DELETE_FETCH'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SET_PLAYER_SONG = 'SET_PLAYER_SONG'
export const ADD_TO_LIKED = 'ADD_TO_LIKED'
export const REMOVE_FROM_LIKED = 'REMOVE_PLAYER_SONG'

export const getFetchAction = (url) => {
    return async dispatch => {
        try {
            const res = await fetch(url)
            if(res.ok) {
                const data = await res.json()
                dispatch({
                    type: GET_FETCH,
                    payload: data
                })
            } else {
                console.log('Errore nel caricamento dei dati')
            }
        } catch(err) {
            console.log('Errore:', err)
        }
    }
}

export const postFetchAction = (url, dati) => {
    return async () => {
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dati)
            })
        } catch(err) {
            console.log('Errore:', err)
        }
    }
}

export const putFetchAction = (url, dati) => {
    return async () => {
        try {
            const res = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dati)
            })
        } catch(err) {
            console.log('Errore:', err)
        }
    }
}

export const setLoginAction = (user) => {
    return {
        type: LOGIN,
        payload: user
    }
}

export const setLogoutAction = () => {
    return {
        type: LOGOUT,
        payload: ''
    }
}

export const setPlayerSongAction = (data) => {
    return {
        type: SET_PLAYER_SONG,
        payload: data
    }
}

export const addToLikedAction = (data) => {
    return {
        type: ADD_TO_LIKED,
        payload: data
    }
}

export const removeFromLikedAction = (data) => {
    return {
        type: REMOVE_FROM_LIKED,
        payload: data
    }
}