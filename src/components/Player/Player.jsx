import { useState, useEffect } from 'react'
import './Player.css'
import { UseSelector, useSelector } from 'react-redux'

const Player = () => {
    const whatSongIsOn = useSelector((state) => state.playerSong.playerSong)

    return (
        <div className='bottomPlayer'>
            {whatSongIsOn ? (
                <>
                <img src={whatSongIsOn.album.cover_medium} alt={whatSongIsOn.title} />
                <div>
                    <h2>{whatSongIsOn.title}</h2>
                    <p>{whatSongIsOn.type} • {whatSongIsOn.album.title} • {whatSongIsOn.artist.name}</p>
                </div>
                </>
            ) : (
                <h1>Clicca una card</h1>
            )}
            
        </div>
    )
}

export default Player