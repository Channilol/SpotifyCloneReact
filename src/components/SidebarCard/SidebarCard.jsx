import './SidebarCard.css'
import { useState, useEffect } from 'react'

const SidebarCard = (playlist) => {
    return (
        <div className='sidebarCard'>
            <img src="https://upload.wikimedia.org/wikipedia/en/6/61/Cover_of_Agust_D%27s_2020_mixtape_%27D-2%27.jpg" alt='playlistImage' />
            <div>
                <h4>D-2</h4>
                <p>Album • Agust D</p>
            </div>
        </div>
    )
}

export default SidebarCard