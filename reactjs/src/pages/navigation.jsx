import classes from './page.module.css'
import { NavLink, Link } from 'react-router-dom'

// const LinkClassName = ({isActive}) => {
//     if (isActive) {
//         return classes.LinkActive + " " + classes.link;
//     }
//     return classes.link;
// }

export const Navigation = () => {
        return (
            <>
            <Link to='/page1'>page1</Link>
            <Link to='/page2'>page2</Link>
            <Link to='/page4'>page4</Link>
        </>
        )
}