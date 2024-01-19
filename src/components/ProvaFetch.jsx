import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const ProvaFetch = () => {
    const [myData, setMyData] = useState([])
    const [newDisco, setNewDisco] = useState(        
        {
        username: '',
        email: '',
        password: '',
        dischi: [{
            titolo: '',
            autore: '',
            anno: null
        }]
    })

    const whoIsLogged = useSelector((state) => state.login.login)
    
    useEffect(() => {
        getData()
    }, [myData])

    const getData = async () => {
        try {
            const res = await fetch('http://localhost:3001/users')
            if(res.ok) {
                const data = await res.json()
                setMyData(data)
            } else {
                console.log('Errore nel caricamento dei dati')
            }
        } catch(err) {
            console.log('Errore:', err)
        }
    }

    const postData = async () => {
        try {
            const res = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newDisco)
            })
        } catch(err) {
            console.log('Errore:', err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postData()
    }

    return (
        <>
        <ul>
            {myData && (
                myData.map((prova) => {
                    if(prova.username === whoIsLogged.username) {
                        return <li key={prova.id}>
                        User: {prova.username}
                            {prova.dischi.map((disco) => {
                                return (
                                    <ul key={disco.titolo}>
                                        <li>{disco.titolo}</li>
                                        <li>{disco.autore}</li>
                                        <li>{disco.anno}</li>
                                    </ul>
                                )
                            })}
                    </li>
                    }
                })
            )}
        </ul>
        <h2>Imposta un nuovo disco</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" placeholder="Scrivi un nome" onChange={(e) => setNewDisco({...newDisco, username: e.target.value})}/>
            <input type="text" placeholder="Scrivi un titolo" onChange={(e) => setNewDisco({...newDisco, dischi:{...newDisco.dischi, titolo: e.target.value}})}/>
            <input type="text" placeholder="Scrivi un autore" onChange={(e) => setNewDisco({...newDisco, dischi:{...newDisco.dischi, autore: e.target.value}})}/>
            <input type="number" placeholder="Scrivi un anno" onChange={(e) => setNewDisco({...newDisco, dischi:{...newDisco.dischi, anno: e.target.value}})}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default ProvaFetch