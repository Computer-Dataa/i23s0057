import classes from './page.module.css'
import { Navigation } from './navigation'

export const Page1 = () => {
    return (
        <>
        <Navigation/>
        <h1 className={ classes.header }>Page1</h1>
        </>
    )
}