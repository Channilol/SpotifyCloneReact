import './HomeCards.css'
import { useState, useEffect } from 'react'
import SearchCard from '../SearchCard/SearchCard'

const HomeCards = ({query}) => {
    const [songs, setSongs] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const apiUrl = 'https://deezerdevs-deezer.p.rapidapi.com/search?q='
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '73999ce929msh48c7f5b93fbd6f4p173171jsn85f07c73f8ec',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetchSongsRow()
    },[])

    const fetchSongsRow = async () => {
        setIsLoading(true)
        try {
            const res = await fetch(apiUrl + query + '&limit=6', options)
            if (res.ok) {
                const fetchedObject = await res.json()
                const data = fetchedObject.data
                if(data) {
                    setSongs(data)
                }
            } else {
                console.log('Errore nel caricamento dati')
            }
        } catch (err) {
            console.log('Errore:', err)
        }
        setIsLoading(false)
    }
    
    return (
        <div className='songsRow'>
            {songs && songs.length > 0 ? (
                songs.map((song) => {
                    return <SearchCard key={song.id} data={song} />
                })
            ) : (isLoading ? (<p>Caricamento...</p>) : (<p>Errore caricamento</p>))}
        </div>
    )
}

export default HomeCards