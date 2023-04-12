import background from '../images/The-Art-of-The-Legend-of-Zelda-Breath-of-the-Wild-3.jpg'

import Header from "./components/Header";

function Homepage() {
    return (
        <div style={{
            height: '100vh',
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover'

        }} 
        >
            <Header />
        </div>
    )
}

export default Homepage;