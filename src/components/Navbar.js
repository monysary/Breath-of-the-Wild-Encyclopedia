import { useEffect, useState } from 'react';
import {
    Button
} from '@mui/material'
import { theme } from "../utils/theme";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function Navbar() {
    const categories = [
        'Equipment',
        'Materials',
        'Treasure',
        'Creatures',
        'Monsters',
    ]

    const [category, setCategory] = useState(0)

    const arrowIconStyle = {
        fontSize: '40px',
        color: theme.color.white
    }

    const buttonStyle = {
        '&:hover': {
            backgroundColor: 'transparent'
        },
        fontFamily: theme.font.secondary,
        color: theme.color.white,
        transform: 'skew(-10deg)',
        textTransform: 'none'
    }

    const [matches, setMatches] = useState(
        window.matchMedia('(min-width: 600px)').matches
    )

    useEffect(() => {
        window.matchMedia('(min-width: 600px)')
            .addEventListener('change', (event) => {
                setMatches(event.matches)
            })
    }, [])

    return (
        <div className="flexAlignCenter" style={{
            gap: matches ? '50px' : '10px',
        }}>
            <Button disableRipple sx={[buttonStyle, {
                '&::after': {
                    content: matches ? `"${category === 0 ? '' : categories[category - 1]}"` : '""',
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                    top: '75%'
                }
            }]}
                onClick={() => {
                    if (category === 0) {
                        return
                    } else {
                        setCategory((before) => {
                            return before - 1
                        })
                    }
                }}
            >
                <DoubleArrowIcon sx={[arrowIconStyle, { transform: 'scaleX(-1)', fontSize: !matches && '30px' }]} />
            </Button>
            <h1 style={{
                fontFamily: theme.font.secondary,
                color: theme.color.white,
                transform: 'skew(-10deg)',
                fontSize: !matches && '20px'
            }}>{categories[category]}</h1>
            <Button disableRipple sx={[buttonStyle, {
                '&::after': {
                    content: matches ? `"${category === categories.length - 1 ? '' : categories[category + 1]}"` : '""',
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                    top: '75%',
                }
            }]}
                onClick={() => {
                    if (category >= categories.length - 1) {
                        return
                    } else {
                        setCategory((before) => {
                            return before + 1
                        })
                    }
                }}
            >
                <DoubleArrowIcon sx={[arrowIconStyle, { fontSize: !matches && '30px' }]} />
            </Button>
        </div>
    )
}

export default Navbar;