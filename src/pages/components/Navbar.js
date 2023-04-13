import { useState } from 'react';
import {
    Button
} from '@mui/material'
import { theme } from "../../App";
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

    

    return (
        <div className="flexAlignCenter" style={{
            gap: '50px',
        }}>
            <Button disableRipple sx={[buttonStyle, {
                '&::after': {
                    content: `"${category === 0 ? '' : categories[category - 1]}"`,
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
                <DoubleArrowIcon sx={[arrowIconStyle, { transform: 'scaleX(-1)', }]} />
            </Button>
            <h1 style={{
                fontFamily: theme.font.secondary,
                color: theme.color.white,
                transform: 'skew(-10deg)',
            }}>{categories[category]}</h1>
            <Button disableRipple sx={[buttonStyle, {
                '&::after': {
                    content: `"${category === categories.length - 1 ? '' : categories[category + 1]}"`,
                    whiteSpace: 'nowrap',
                    position: 'absolute',
                    top: '75%'
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
                <DoubleArrowIcon sx={arrowIconStyle} />
            </Button>
        </div>
    )
}

export default Navbar;