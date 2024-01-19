import './SidebarCard.css'
import { useState, useEffect } from 'react'

const SidebarCard = ({data}) => {
    return (
        <div className='sidebarCard'>
            <img src={data.album.cover_medium} alt={data.album.title} />
            <div>
                <h4>{data.title}</h4>
                <p>{data.album.type} • {data.artist.name}</p>
            </div>
        </div>
    )
}

export default SidebarCard