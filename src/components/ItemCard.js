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
                <div className='statusBox' style={{
                    display: selected?.category === 'equipment' ? 'block' : 'none'
                }}>Atk: {
                        selected?.attack !== null ?
                            selected?.attack
                            : 'None'
                    }</div>
                <div className='statusBox' style={{
                    display: selected?.category === 'equipment' ? 'block' : 'none'
                }}>Def: {
                        selected?.defense !== null ?
                            selected?.defense
                            : 'None'
                    }</div>
                <div className='statusBox' style={{
                    display: selected?.category === 'materials' ? 'block' : 'none'
                }}>Effect: {
                        selected?.cooking_effect !== '' ?
                            capitalize(selected?.cooking_effect)
                            : 'None'
                    }</div>
                <div className='statusBox' style={{
                    display: selected?.category === 'materials' ? 'block' : 'none'
                }}>Recovery: {selected?.hearts_recovered} ♥</div>
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
                        selected?.description :
                        'Unknown'
                }</div>
        </div>
    )
}

export default ItemCard;