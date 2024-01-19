import './LeftSidebar.css'
import house from '../../assets/image/house.svg'
import search from '../../assets/image/search.svg'
import bookhalf from '../../assets/image/bookhalf.svg'
import SidebarCard from '../SidebarCard/SidebarCard'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setLogoutAction } from '../../redux/actions'

const LeftSidebar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const whoIsLogged = useSelector((state) => state.login.login)

    const handleLogout = () => {
        if (whoIsLogged) {
            dispatch(setLogoutAction())
        } else {
            alert('Non sei loggato!')
        }
    }

    return (
        <div className='leftSidebar'>
            <div className='topLeftSidebar'>
                <div>
                    <img src={house} alt='home' onClick={() => navigate('/')}/>
                    <Link to='/'>Home</Link>
                </div>
                <div>
                    <img src={search} alt='search' onClick={() => navigate('/search')}/>
                    <Link to='/search'>Cerca</Link>
                </div>  
            </div>
            <div className='midLeftSidebar'>
                {whoIsLogged ? (
                    <>
                    <p>{whoIsLogged.email}</p>
                    <button onClick={() => handleLogout()}>LOGOUT</button>
                    </>
                ) : (
                    <>
                    <button onClick={() => navigate('/login')}>LOGIN</button>
                    <button onClick={() => navigate('/register')}>REGISTER</button>
                    </>
                )}
                
            </div>
            <div className='botLeftSidebar'>
                <div>
                    <img src={bookhalf} alt='book' />
                    <p>La tua libreria</p>
                </div>
                <div className='userPlaylists'>
                    {whoIsLogged && whoIsLogged.likedSongs.length > 0 ? (
                        whoIsLogged.likedSongs.map((song) => {
                            return <SidebarCard key={song.id} data={song} />
                        })
                    ) : (
                        <>
                        <p>Non c'è niente</p>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}

export default LeftSidebar