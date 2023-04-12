import { theme } from "../../App";
import FavoriteIcon from '@mui/icons-material/Favorite';
import rupee from '../../images/green-rupee.png'

function Header() {
    const heartValues = [1, 1, 1, 1, 1, 0]

    return (
        <header style={{
            backgroundColor: `${theme.color.black}CC`,
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 50px'
        }}>
            <div>
                {heartValues.map((heart) => {
                    if (heart === 1) {
                        return <FavoriteIcon sx={{ color: theme.color.red }} />
                    } else {
                        return <FavoriteIcon sx={{ color: theme.color.brown }} />
                    }
                })}
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'center',
                gap: '10px'
            }}>
                <img src={rupee} height='40px' />
                <div style={{ fontFamily: 'RocknRoll One', fontSize: '20px', color: theme.color.white }}>1,127</div>
            </div>
        </header>
    )
}

export default Header;