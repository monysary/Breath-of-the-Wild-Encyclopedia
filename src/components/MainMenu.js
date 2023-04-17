import { useContext, useEffect } from "react";

import { CategoryContext } from "../pages/Homepage";

import {
    fetchEquipment,
    fetchMaterials,
    fetchTreasure,
    fetchCreatures,
    fetchMonsters
} from "../utils/botwApi";

function MainMenu() {
    const [categories, category, setCategory] = useContext(CategoryContext)

    useEffect(() => {
        switch (categories[category]) {
            case 'Equipment':
                fetchEquipment()
                break;
            case 'Materials':
                fetchMaterials()
                break;
            case 'Treasure':
                fetchTreasure()
                break;
            case 'Creatures':
                fetchCreatures()
                break;
            case 'Monsters':
                fetchMonsters()
                break;
        }
    }, [category])

    return (
        <div style={{
            border: '2px solid green',

        }}>

        </div>
    )
}

export default MainMenu;