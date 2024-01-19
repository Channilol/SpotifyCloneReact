import './RegisterPage.css'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { postFetchAction } from "../../redux/actions";
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [registerUser, setRegisterUser] = useState({
        username: '',
        email: '',
        password: '',
        playlist: [],
        likedSongs: []
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const whoIsLogged = useSelector((state) => state.login.login)
    const apiUrl = 'http://localhost:3001/users'

    const handleRegister = async (e) => {
        e.preventDefault()
        if (registerUser.username && registerUser.email && registerUser.password) {
            try {
              await dispatch(postFetchAction(apiUrl, registerUser))  
              console.log(`Hai registrato ${registerUser.username} con successo`)
              navigate('/login')
            } catch(err) {
                console.log('Errore nella registrazione')
            }
        } else {
            alert('Compila prima tutti i dati per registrarti!')
        }
    }

    return (
        <div className='registerPage'>
            <h1>REGISTER PAGE</h1>
            {!whoIsLogged ? (
            <form onSubmit={(e) => handleRegister(e)}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" onChange={(e) => setRegisterUser({...registerUser, username: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={(e) => setRegisterUser({...registerUser, email: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={(e) => setRegisterUser({...registerUser, password: e.target.value})}/>
                </div>
                <button type='submit'>REGISTER</button>
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

export default RegisterPage