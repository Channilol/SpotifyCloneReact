import './SearchCard.css'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import play from '../../assets/image/play.svg'
import { useEffect, useState } from 'react'
import { putFetchAction } from '../../redux/actions'
import { setPlayerSongAction } from '../../redux/actions'

const SearchCard = ({data}) => {
    const [isLiked, setIsLiked] = useState(false)
    const [newLikedSongs, setNewLikedSongs] = useState({
        id: '',
        username: '',
        email: '',
        password: '',
        playlist: [],
        likedSongs: []
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const apiUrl = 'http://localhost:3001/users'
    const whoIsLogged = useSelector((state) => state.login.login)
    const userList = useSelector((state) => state.fetch.fetchResult)

    useEffect(() => {
        console.log(newLikedSongs)
    },[newLikedSongs])

    useEffect(() => {
        setNewLikedSongs(whoIsLogged)
        setNewLikedSongs({
            ...newLikedSongs,
            likedSongs: [...newLikedSongs.likedSongs, data]
        })
        /* if(isLiked && whoIsLogged) {
            userList.map((user) => {
                if(user.id === whoIsLogged.id) {
                    setNewLikedSongs({
                        ...newLikedSongs, data
                    })
                    dispatch(putFetchAction(apiUrl, newLikedSongs))
                }
            })  
        } */
    },[isLiked])

    return (
        <div className='searchCard'>
            <img src={data.album.cover_medium} alt={data.title} onClick={() => {
                    dispatch(setPlayerSongAction(data))
                }}/>
            <div>
                <h1>{data.title}</h1>
            </div>
            <div className='addToLiked'>
            {whoIsLogged ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill={isLiked ? '#1ed760' : 'rgba(255,255,255,0.1)'} className="bi bi-heart-fill" viewBox="0 0 16 16" onClick={() => {
                    if(isLiked) {
                        setIsLiked(false)
                    } else {
                        setIsLiked(true)
                    }
                }}>
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