import { useContext, useEffect } from 'react';

import { theme } from '../utils/theme'
import { capitalize } from "../utils/helpers";

import { MediaQueryContext } from '../App';

function ItemCard({ selected }) {
    const [matches, setMatches, breakPoint] = useContext(MediaQueryContext)

    useEffect(() => {
        window.matchMedia(breakPoint)
            .addEventListener('change', (event) => {
                setMatches(event.matches)
            })
    })

    return (
        <div style={{
            width: matches && '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            padding: matches && '0 20px',
            fontFamily: theme.font.secondary,
            color: theme.color.white,
            marginBottom: '10px'
        }}>
            <div style={{
                padding: '5px',
            }}>
                <img alt="item" src={selected?.image} style={{
                    margin: '0 auto',
                    width: !matches && '170px',
                    height: !matches && '170px'
                }} />
            </div>
            {/* -----Name----- */}
            <div style={{
                fontSize: matches ? '25px' : '18px',
                padding: '0 0 5px 0',
                borderBottom: `1px solid ${theme.color.white}77`
            }}>
                {capitalize(selected?.name)}
            </div>
            {/* -----Status----- */}
            <div className='flexAlignCenter' style={{
                margin: '5px 0 0 0',
                gap: '10px',
                fontSize: !matches && '14px'
            }}>
                {selected?.category === 'equipment' &&
                    <div className='statusBox'>
                        Attack: {
                            selected?.attack !== null ?
                                selected?.attack
                                : 'None'
                        }</div>}
                {selected?.category === 'equipment' && <div className='statusBox'>
                    Defense: {
                        selected?.defense !== null ?
                            selected?.defense
                            : 'None'
                    }</div>}
                {selected?.category === 'materials' && <div className='statusBox'>
                    Effect: {
                        selected?.cooking_effect !== '' ?
                            capitalize(selected?.cooking_effect)
                            : 'None'
                    }</div>}
                {selected?.category === 'materials' && <div className='statusBox'>
                    Recovery: {selected?.hearts_recovered} ♥
                </div>}
                {selected?.category === 'creatures' && <div className='statusBox' style={{
                    display: selected?.cooking_effect !== undefined ? 'block' : 'none'
                }}>Effect: {
                        selected?.cooking_effect !== '' ?
                            capitalize(selected?.cooking_effect)
                            : 'None'
                    }</div>}
                {selected?.category === 'creatures' && <div className='statusBox' style={{
                    display: selected?.hearts_recovered !== undefined ? 'block' : 'none'
                }}>Recovery: {selected?.hearts_recovered} ♥
                </div>}
            </div>
            {/* -----Location----- */}
            <div style={{
                margin: '5px 0 0 0',
                fontSize: !matches && '14px',
            }}>
                Location: {
                    selected?.common_locations !== null ?
                        selected?.common_locations.join(', ')
                        : 'Unknown'
                }</div>
            {/* -----Description----- */}
            <div style={{
                margin: '5px 0 0 0',
                fontSize: !matches && '14px',
            }}>
                Description: {
                    selected?.description !== null ?
                        selected?.description
                        : 'Unknown'
                }</div>
            {/* -----Drops----- */}
            {selected?.category === 'treasure' ? <div style={{
                margin: '5px 0 0 0',
                fontSize: !matches && '14px',
            }}>
                Drops: {
                    selected?.drops &&
                    selected?.drops.map((drop) => {
                        if (selected?.drops.indexOf(drop) === selected?.drops.length - 1) {
                            return capitalize(drop)
                        } else {
                            return `${capitalize(drop)}, `
                        }
                    })}
            </div>
                : selected?.category === 'monsters' ? <div style={{
                    margin: '5px 0 0 0',
                    fontSize: !matches && '14px',
                }}>
                    Drops: {
                        selected?.drops &&
                        selected?.drops.map((drop) => {
                            if (selected?.drops.indexOf(drop) === selected?.drops.length - 1) {
                                return capitalize(drop)
                            } else {
                                return `${capitalize(drop)}, `
                            }
                        })}
                </div>
                    : selected?.category === 'creatures' && <div style={{
                        margin: '5px 0 0 0',
                        fontSize: !matches && '14px',
                        display: selected?.drops !== undefined ? 'block' : 'none'
                    }}>
                        Drops: {
                            selected?.drops ?
                                selected?.drops.map((drop) => {
                                    if (selected?.drops.indexOf(drop) === selected?.drops.length - 1) {
                                        return capitalize(drop)
                                    } else {
                                        return `${capitalize(drop)}, `
                                    }
                                })
                                : 'None'
                        }
                    </div>
            }
        </div>
    )
}

export default ItemCard;