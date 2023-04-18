import { theme } from '../utils/theme'
import { capitalize } from "../utils/helpers";

function ItemCard({ selected }) {
    return (
        <div style={{
            width: '40%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{
                padding: '5px',
                // border: `2px solid ${theme.color.white}AA`,
            }}>
                <img alt="item" src={selected?.image} />
            </div>
            <div style={{
                fontFamily: theme.font.secondary,
                color: theme.color.white,
                fontSize: '25px'
            }}>
                {capitalize(selected?.name)}
            </div>
        </div>
    )
}

export default ItemCard;