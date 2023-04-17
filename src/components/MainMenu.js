import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { CategoryContext } from "../pages/Homepage";
import ItemCard from "./ItemCard";

function MainMenu() {
    const [categories, category, setCategory] = useContext(CategoryContext)
    const [menu, setMenu] = useState([])

    useEffect(() => {
        const BOTWData = async () => {
            try {
                const res = await axios.get(
                    `https://botw-compendium.herokuapp.com/api/v2/category/${categories[category].toLowerCase()}`
                )
                if (categories[category] === 'Creatures') {
                    setMenu([...res.data.data.food, ...res.data.data.non_food])
                } else {
                    setMenu(res.data.data)
                }
            } catch (err) {
                console.log(err);
            }
        }

        BOTWData()

    }, [category])

    return (
        <div style={{
            padding: '0 100px',
            display: 'flex',

        }}>
            <div style={{
                height: '70vh',
                overflow: 'auto',
            }}>
                {menu.map((item) => {
                    return <img
                        key={item.id}
                        alt="image"
                        src={item.image}
                        style={{
                            width: '100px',
                            margin: '5px'
                        }}
                    />
                })}
            </div>
            <ItemCard />
        </div>
    )
}

export default MainMenu;