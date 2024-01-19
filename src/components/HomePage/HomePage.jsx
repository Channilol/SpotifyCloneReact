import './HomePage.css'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import HomeCards from '../homeCards/HomeCards'

const HomePage = () => {
    const navigate = useNavigate()
    const whoIsLogged = useSelector((state) => state.login.login)

    useEffect(() => {
        console.log(whoIsLogged)
    },[whoIsLogged])

    return (
        <div className='homepage'>
            {whoIsLogged ? (
                <>
                <h2>Bentornato {whoIsLogged.email}</h2>
                <p>Ora puoi mettere mi piace a qualsiasi canzone!</p>
                </>
            ) : (
                <>
                <h2>Benvenuto!</h2>
                <p>Per accedere a questa sezione devi effettuare il login.</p>
                </>
            )}
            <div className='homepageSongs'>
                <h2>Chilling</h2>
                <HomeCards query='chilling' />
                <h2>Relax</h2>
                <HomeCards query='relax' />
                <h2>Study</h2>
                <HomeCards query='study' />
            </div>
        </div>
    )
}

export default HomePage