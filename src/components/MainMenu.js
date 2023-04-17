import axios from "axios";
import { CircularProgress } from '@mui/material';
import { useContext, useEffect, useState } from "react";

import { CategoryContext } from "../pages/Homepage";

function MainMenu() {
    const [categories, category, setCategory] = useContext(CategoryContext)
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const BOTWData = async () => {
            try {
                const res = await axios.get(
                    `https://botw-compendium.herokuapp.com/api/v2/category/${categories[category].toLowerCase()}`
                )
                switch (categories[category]) {
                    case 'Creatures':
                        setMenu([...res.data.data.food, ...res.data.data.non_food])
                        break;
                    default:
                        setMenu(res.data.data)
                        break;
                }
                setLoading(false)
            } catch (err) {
                console.log(err);
            }
        }

        setLoading(true)
        BOTWData()

    }, [category])

    return (
        <div style={{
            border: '2px solid green',
            margin: '0 100px',
            height: '70vh',
            overflow: 'auto'
        }}>
            {menu.map((item) => {
                if (loading) {
                    return <CircularProgress />
                } else {
                    return <img key={item.id} alt="image" src={item.image} width='100px' />
                }
            })}
        </div>
    )
}

export default MainMenu;