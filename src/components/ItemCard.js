import { theme } from '../utils/theme'
import { capitalize } from "../utils/helpers";

function ItemCard({ selected }) {
    const statusBox = {
        border: `1px solid ${theme.color.white}77`,
        padding: '0 8px',
    }

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
            {/* -----Equipment Attack/Defense----- */}
            <div className='flexAlignCenter' style={{
                margin: '5px 0 0 0',
                gap: '10px',
                display: selected?.category === 'equipment' ? 'flex' : 'none'
            }}>
                <div style={statusBox}>Atk: {selected?.attack}</div>
                <div style={statusBox}>Def: {selected?.defense}</div>
            </div>
            {/* -----Equipment Location----- */}
            <div style={{
                margin: '5px 0 0 0',
                display: selected?.category === 'equipment' ? 'flex' : 'none'
            }}>
                Location: {selected?.common_locations != null ? selected?.common_locations.join(', ') : 'Unknown'}
            </div>
            {/* -----Description----- */}
            <div style={{
                margin: '5px 0 0 0'
            }}>
                Description: {selected?.description != null ? selected?.description : 'Unknown'}
            </div>
        </div>
    )
}

export default ItemCard;