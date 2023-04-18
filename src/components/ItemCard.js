import { capitalize } from "../utils/helpers";

function ItemCard({ selected }) {
    return (
        <div style={{
            width: '50%'
        }}>
            {capitalize(selected?.name)}
        </div>
    )
}

export default ItemCard;