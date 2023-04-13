import { theme } from "../../App";
import FavoriteIcon from '@mui/icons-material/Favorite';
import rupee from '../../images/green-rupee.png'

import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function Header() {
    const heartValues = [1, 1, 1, 1, 1, 0]

    const [matches, setMatches] = useState(
        window.matchMedia('(min-width: 768px)').matches
    )

    useEffect(() => {
        window.matchMedia(`(min-width: 768px)`)
            .addEventListener('change', (event) => {
                setMatches(event.matches)
            })
    }, [])

    return (
        <div style={{
            backgroundColor: `${theme.color.black}AA`,
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: matches ? 'space-between' : 'center',
            padding: '0 50px'
        }}>
            <div style={{
                display: matches ? 'block' : 'none'
            }}>
                {heartValues.map((heart) => {
                    if (heart === 1) {
                        return <FavoriteIcon sx={{ color: theme.color.red }} />
                    } else {
                        return <FavoriteIcon sx={{ color: theme.color.brown }} />
                    }
                })}
            </div>
            <Navbar />
            <div className="flexAlignCenter" style={{
                gap: '10px',
                display: matches ? 'flex' : 'none'
            }}>
                <img src={rupee} height='40px' />
                <div style={{ fontFamily: theme.font.tertiary, fontSize: '20px', color: theme.color.white }}>1,127</div>
            </div>
        </div>
    )
}

export default Header;