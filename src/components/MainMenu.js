import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { CategoryContext } from "../pages/Homepage";
import ItemCard from "./ItemCard";

function MainMenu() {
    const [categories, category] = useContext(CategoryContext)
    const [menu, setMenu] = useState([])
    const [selected, setSelected] = useState()

    useEffect(() => {
        const BOTWData = async () => {
            try {
                const res = await axios.get(
                    `https://botw-compendium.herokuapp.com/api/v2/category/${categories[category].toLowerCase()}`
                )
                if (categories[category] === 'Creatures') {
                    setMenu([...res.data.data.food, ...res.data.data.non_food])
                    setSelected(res.data.data.food[0])
                } else {
                    setMenu(res.data.data)
                    setSelected(res.data.data[0])
                }
            } catch (err) {
                console.log(err);
            }
        }

        BOTWData()

    }, [category, categories])

    return (
        <div style={{
            padding: '0 100px',
            display: 'flex',

        }}>
            <div style={{
                height: '70vh',
                width: '50%',
                overflow: 'auto',
            }}>
                {menu.map((item) => {
                    return <img
                        key={item.id}
                        alt="item"
                        src={item.image}
                        style={{
                            width: '100px',
                            margin: '5px',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            setSelected(item)
                        }}
                    />
                })}
            </div>
            <ItemCard selected={selected} />
        </div>
    )
}

export default MainMenu;