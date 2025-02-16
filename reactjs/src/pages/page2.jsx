import classes from './page.module.css'
import { Navigation } from './navigation'

export const Page2 = () => {
    return (
        <>
        <Navigation/>
        <h1 className={ classes.header }>Page2</h1>
        </>
    )
}