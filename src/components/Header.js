import { useEffect, useContext } from "react";
import { theme } from "../utils/theme";
import FavoriteIcon from '@mui/icons-material/Favorite';
import rupee from '../images/green-rupee.png'

import Navbar from "./Navbar";
import { MediaQueryContext } from "../App";

function Header() {
    const heartValues = [1, 1, 1, 1, 1, 0]

    const [matches, setMatches, breakPoint] = useContext(MediaQueryContext)

    useEffect(() => {
        window.matchMedia(breakPoint)
            .addEventListener('change', (event) => {
                setMatches(event.matches)
            })
    })

    return (
        <div style={{
            backgroundColor: `${theme.color.black}AA`,
            height: matches ? '100px' : '70px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: matches ? 'space-between' : 'center',
            padding: '0 50px',
            marginBottom: matches ? '70px' : '40px'
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
                <img src={rupee} alt="green rupee" height='40px' />
                <div style={{ fontFamily: theme.font.tertiary, fontSize: '20px', color: theme.color.white }}>1,127</div>
            </div>
        </div>
    )
}

export default Header;