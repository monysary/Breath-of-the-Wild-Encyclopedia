import React, { useState, useEffect, useContext } from 'react'

import background from '../images/The-Art-of-The-Legend-of-Zelda-Breath-of-the-Wild-3.jpg'

import Header from "../components/Header";
import MainMenu from '../components/MainMenu';

import { MediaQueryContext } from '../App';

export const CategoryContext = React.createContext()

function Homepage() {
    const categories = [
        'Equipment',
        'Materials',
        'Treasure',
        'Creatures',
        'Monsters',
    ]

    const [category, setCategory] = useState(0)

    const [matches, setMatches, breakPoint] = useContext(MediaQueryContext)

    useEffect(() => {
        window.matchMedia(breakPoint)
            .addEventListener('change', (event) => {
                setMatches(event.matches)
            })
    })

    return (
        <CategoryContext.Provider value={[categories, category, setCategory]}>
            <div style={{
                height: '100vh',
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: matches ? 'left' : 'center',
                backgroundAttachment: 'fixed',
                overflow: 'auto'
            }}
            >
                <Header />
                <MainMenu />
            </div>
        </CategoryContext.Provider>
    )
}

export default Homepage;