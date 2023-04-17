import { useContext, useEffect, useState } from "react";

import { CategoryContext } from "../pages/Homepage";

import axios from "axios";

function MainMenu() {
    const [categories, category, setCategory] = useContext(CategoryContext)
    const [menu, setMenu] = useState()

    useEffect(() => {
        const BOTWData = async () => {
            try {
                const res = await axios.get(
                    `https://botw-compendium.herokuapp.com/api/v2/category/${categories[category].toLowerCase()}`
                )
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }

        BOTWData()

    }, [category])

    return (
        <div style={{
            border: '2px solid green',
            margin: '0 100px',
        }}>

        </div>
    )
}

export default MainMenu;