import './LoginPage.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLoginAction } from '../../redux/actions'
import { getFetchAction } from "../../redux/actions";
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const [loginData, setLoginData] = useState({
        id: '',
        username: '',
        email: '',
        password: '',
        playlist: [],
        likedSongs: []
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const whoIsLogged = useSelector((state) => state.login.login)
    const userList = useSelector((state) => state.fetch.fetchResult)
    const apiUrl = 'http://localhost:3001/users'

    useEffect(() => {
        dispatch(getFetchAction(apiUrl))
    },[])

    useEffect(() => {
        console.log('Ora è loggato', whoIsLogged)
    }, [whoIsLogged])

    const handleLogin = async (e) => {
        e.preventDefault()
        if (loginData.email && loginData.password) {
            let user;
            userList.forEach((u) => {
                if (u.email === loginData.email && u.password === loginData.password) {
                    user = u;
                }
            });

            if(user) {
                await dispatch(setLoginAction(user))
                alert(`Bentornato ${user.username}`)
                dispatch(setLoginAction(user))
                navigate('/')
                return;
            } else {
                alert('Questo account non esiste!')
                }
        } else {
            alert('Compila tutti i campi!')
        }
    }

    return (
        <div className='loginPage'>
            <h1>LOGIN PAGE</h1>
        {!whoIsLogged ? (
            <form onSubmit={(e) => handleLogin(e)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={(e) => setLoginData({...loginData, email: e.target.value})} value={loginData.email} required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={(e) => setLoginData({...loginData, password: e.target.value})} value={loginData.password} required/>
                </div>
                <button type='submit'>LOGIN</button>
            </form>
        ) : (
            <>
            <h1>Sei già loggato!</h1>
            <div>
                <Link to='/'>Torna alla home</Link>
            </div>
            </>
        )}
        </div>     
    )
}

export default LoginPage