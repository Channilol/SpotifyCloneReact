import './SearchCard.css'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import play from '../../assets/image/play.svg'
import { useEffect, useState } from 'react'
import { putFetchAction } from '../../redux/actions'
import { setPlayerSongAction } from '../../redux/actions'
import { addToLikedAction } from '../../redux/actions'
import { removeFromLikedAction } from '../../redux/actions'

const SearchCard = ({data}) => {
    const [isLiked, setIsLiked] = useState(false)

    const whoIsLogged = useSelector((state) => state.login.login)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const apiUrl = `http://localhost:3001/users/${whoIsLogged.id}`

    const handleFetchPUT = async (url, song) => {
        try {
            const res = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(song)
            })
        } catch (err) {
            console.log('Errore', err)
        }
    }

    const handleLikedSongs = () => {
        if (whoIsLogged) {
            if (whoIsLogged.likedSongs.includes(data)) {
                setIsLiked(false)
                dispatch(removeFromLikedAction(data))
                handleFetchPUT(apiUrl, whoIsLogged)
            } else {
                setIsLiked(true)
                dispatch(addToLikedAction(data))
                handleFetchPUT(apiUrl, whoIsLogged)
            }
        } else {
            alert('Non sei loggato')
        }
    }

    return (
        <div className='searchCard' >
            <img src={data.album.cover_medium} alt={data.title} onClick={() => {
            dispatch(setPlayerSongAction(data))
        }}/>
            <div>
                <h1>{data.title}</h1>
            </div>
            <div className='addToLiked'>
            {whoIsLogged ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill={isLiked ? '#1ed760' : 'rgba(255,255,255,0.1)'} className="bi bi-heart-fill" viewBox="0 0 16 16" onClick={() => handleLikedSongs()}>
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                </svg>
            ) : ''}
            </div>
            <div className='playerDiv'>
                <img src={play} alt='player' onClick={() => {
                    dispatch(setPlayerSongAction(data))
                }}/>
            </div>
        </div>
    )
}

export default SearchCard