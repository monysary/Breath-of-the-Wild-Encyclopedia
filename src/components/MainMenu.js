import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { CategoryContext } from "../pages/Homepage";
import ItemCard from "./ItemCard";

import { theme } from "../utils/theme";
import { MediaQueryContext } from "../App";

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

    const [matches, setMatches, breakPoint] = useContext(MediaQueryContext)

    useEffect(() => {
        window.matchMedia(breakPoint)
            .addEventListener('change', (event) => {
                setMatches(event.matches)
            })
    })

    return (
        <div style={{
            padding: matches ? '5px 60px' : '5px 15px',
            backgroundColor: `${theme.color.black}AA`,
            display: 'flex',
            flexDirection: matches ? 'row' : 'column-reverse'
        }}>
            <div style={{
                height: matches && '70vh',
                width: matches && '60%',
                overflow: 'auto',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                paddingTop: '10px',
                borderTop: !matches && `1px solid ${theme.color.white}77`
            }}>
                {menu.map((item) => {
                    return <img
                        key={item.id}
                        alt="item"
                        src={item.image}
                        style={{
                            width: matches ? '100px' : '60px',
                            height: matches ? '100px' : '60px',
                            padding: '3px',
                            cursor: 'pointer',
                            border: selected?.id === item?.id ? `3px solid ${theme.color.white}` : `3px solid ${theme.color.white}00`
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