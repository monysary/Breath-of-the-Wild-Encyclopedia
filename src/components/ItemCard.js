import { theme } from '../utils/theme'
import { capitalize } from "../utils/helpers";

function ItemCard({ selected }) {
    return (
        <div style={{
            width: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            padding: '0 20px'
        }}>
            <div style={{
                padding: '5px',
            }}>
                <img alt="item" src={selected?.image} style={{ margin: '0 auto' }} />
            </div>
            <div style={{
                fontFamily: theme.font.secondary,
                color: theme.color.white,
                fontSize: '25px',
                padding: '0 0 5px 0',
                borderBottom: `1px solid ${theme.color.white}77`
            }}>
                {capitalize(selected?.name)}
            </div>
            <div style={{
                fontFamily: theme.font.secondary,
                color: theme.color.white,
                margin: '5px 0 0 0'
            }}>
                {selected?.description}
            </div>
        </div>
    )
}

export default ItemCard;