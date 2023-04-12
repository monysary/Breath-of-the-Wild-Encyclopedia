import { theme } from "../../App";

function Header() {
    return (
        <h1 style={{
            fontFamily: theme.font.primary,
            color: theme.color.yellow,
            backgroundColor: `${theme.color.black}CC`,
            height: '100px',
        }}>
            The BOTW Encyclopedia
        </h1>
    )
}

export default Header;