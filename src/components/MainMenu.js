import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { CategoryContext } from "../pages/Homepage";
import ItemCard from "./ItemCard";

import { theme } from "../utils/theme";

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
            padding: '5px 100px',
            backgroundColor: `${theme.color.black}AA`,
            display: 'flex',
        }}>
            <div style={{
                height: '70vh',
                width: '60%',
                overflow: 'auto',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {menu.map((item) => {
                    return <img
                        key={item.id}
                        alt="item"
                        src={item.image}
                        style={{
                            width: '100px',
                            height: '100px',
                            padding: '5px',
                            cursor: 'pointer',
                            border: selected?.id === item?.id ? `3px solid ${theme.color.white}` : 'none'
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