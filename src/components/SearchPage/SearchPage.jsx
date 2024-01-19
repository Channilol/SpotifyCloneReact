import './SearchPage.css'
import { useState, useEffect } from 'react'
import SearchCard from '../SearchCard/SearchCard'

const SearchPage = () => {
    const [query, setQuery] = useState('')
    const [searchData, setSearchData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const apiUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query.toLowerCase()}`
    //const apiAlbum = `https://deezerdevs-deezer.p.rapidapi.com/album/6485018`
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '73999ce929msh48c7f5b93fbd6f4p173171jsn85f07c73f8ec',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const res = await fetch(apiUrl, options)
            if(res.ok) {
                const fetchedObject = await res.json()
                console.log(fetchedObject)
                const data = fetchedObject.data
                if (data) {
                    setSearchData(data)
                    setQuery('')
                }
            } else {
                console.log('Errore nel caricamento dati')
            }
        } catch(err) {
            console.log('Errore', err)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        console.log(searchData)
    },[searchData])

    return (
        <div className='searchPage'>
            <div>
                <h1>Search page</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} /> 
                </form>
            </div>
            <div className='searchResultContainer'>
                {searchData && searchData.length > 0 ? (
                    searchData.map((song) => {
                        return <SearchCard key={song.id} data={song} />
                    })
                ) : (isLoading ? (<p>Caricamento...</p>) : (<p>Cerca qualcosa...</p>))}
            </div>          
        </div>
    )
} 

export default SearchPage