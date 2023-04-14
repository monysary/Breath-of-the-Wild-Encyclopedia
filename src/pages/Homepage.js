import background from '../images/The-Art-of-The-Legend-of-Zelda-Breath-of-the-Wild-3.jpg'

import Header from "../components/Header";
import MainMenu from '../components/MainMenu';

// import { fetchEquipment, fetchMaterials, fetchTreasure, fetchCreatures, fetchMonsters } from '../utils/botwApi';

function Homepage() {

    return (
        <div style={{
            height: '100vh',
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
        }} 
        >
            <Header />
            <MainMenu />
        </div>
    )
}

export default Homepage;