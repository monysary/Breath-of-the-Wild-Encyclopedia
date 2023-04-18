import { theme } from '../utils/theme'
import { capitalize } from "../utils/helpers";

function ItemCard({ selected }) {

    return (
        <div style={{
            width: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            padding: '0 20px',
            fontFamily: theme.font.secondary,
            color: theme.color.white,
        }}>
            <div style={{
                padding: '5px',
            }}>
                <img alt="item" src={selected?.image} style={{ margin: '0 auto' }} />
            </div>
            {/* -----Name----- */}
            <div style={{
                fontSize: '25px',
                padding: '0 0 5px 0',
                borderBottom: `1px solid ${theme.color.white}77`
            }}>
                {capitalize(selected?.name)}
            </div>
            {/* -----Status----- */}
            <div className='flexAlignCenter' style={{
                margin: '5px 0 0 0',
                gap: '10px',
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
            }}>
                Location: {
                    selected?.common_locations !== null ?
                        selected?.common_locations.join(', ')
                        : 'Unknown'
                }</div>
            {/* -----Description----- */}
            <div style={{
                margin: '5px 0 0 0'
            }}>
                Description: {
                    selected?.description !== null ?
                        selected?.description
                        : 'Unknown'
                }</div>
            {/* -----Drops----- */}
            {selected?.category === 'treasure' ? <div style={{
                margin: '5px 0 0 0',
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