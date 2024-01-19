import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setLoginAction, setLogoutAction } from "../../redux/actions";
import { getFetchAction } from "../../redux/actions";
import { postFetchAction } from "../../redux/actions";

const SideBar = () => {
    const [login, setLogin2] = useState({
        username: '',
        email: '',
        password: '',
        dischi: []
    })

    const dispatch = useDispatch()
    const whoIsLogged = useSelector((state) => state.login.login)
    const userList = useSelector((state) => state.fetch.fetchResult)
    const apiUrl = 'http://localhost:3001/users'

    useEffect(() => {
        dispatch(getFetchAction(apiUrl))
    },[])

    useEffect(() => {
        console.log(userList)
    }, [userList])

    useEffect(() => {
        console.log(whoIsLogged)
    }, [whoIsLogged])

    const handleLogin = (e) => {
        e.preventDefault()
        if(login.username && login.email && login.password) {
            userList.map((utente) => {
                if(utente.username === login.username && utente.email === login.email && utente.password === login.password) {
                    dispatch(setLoginAction(login))
                } else {
                    console.log('Questo account non esiste')
                }
            })

        } else {
            console.log('prima compila tutti i campi')
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        if(login.username && login.email && login.password) {
            try {
                await dispatch(postFetchAction(apiUrl, login))
                dispatch(getFetchAction(apiUrl))
                setLogin2({
                    ...login,
                    username: '',
                    email: '',
                    password: ''
                })
            } catch (err) {
                console.log('errore', err)
            }  
        } else {
            console.log('prima compila tutti i campi')
        }
        
    }

    const handleLogout = () => {
        if (whoIsLogged) {
            dispatch(setLogoutAction())
        } else {
            console.log('Devi prima loggare')
        }
    }

    return (
        <>
        <h2>Login</h2>
        <form onSubmit={(e) => handleLogin(e)}>
            <input type='text' placeholder="Username" value={login.username} onChange={(e) => {setLogin2({...login, username: e.target.value})}}/>
            <input type='text' placeholder="Email" value={login.email} onChange={(e) => {setLogin2({...login, email: e.target.value})}}/>
            <input type='text' placeholder="Password" value={login.password} onChange={(e) => {setLogin2({...login, password: e.target.value})}}/>
            <button type="submit">Submit</button>
        </form>
        <h2>Register</h2>
        <form onSubmit={(e) => handleRegister(e)}>
            <input type='text' placeholder="Username" value={login.username} onChange={(e) => {setLogin2({...login, username: e.target.value})}}/>
            <input type='text' placeholder="Email" value={login.email} onChange={(e) => {setLogin2({...login, email: e.target.value})}}/>
            <input type='text' placeholder="Password" value={login.password} onChange={(e) => {setLogin2({...login, password: e.target.value})}}/>
            <button type="submit">Submit</button>
        </form>
        <h2>Logout</h2>
        <button onClick={() => handleLogout()}>Logout</button>
        </>
    )
}

export default SideBar