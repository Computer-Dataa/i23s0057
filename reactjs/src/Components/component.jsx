// import { Children } from "react";

// export const Button = function({text="text"}) {
//     return (
//         <button>{text}</button>
//     )
// }

// export const H1 = function({text="text"}) {
//     return (
//         <h1>{text}</h1>
//     )
// }

// export const Main = ({children}) => {
//     return (
//         <main style={{width:'400px' , height:'300px' , backgroundColor:'white'}}>
//             {children}
//         </main>
//     )
// }

import classes from './components.module.css'

export const Button = function({text='tap'}) {
    return (
        <button className={classes.button}>{text}</button>
    )
}

export const Main = ({ showChildren, children }) => {
    return (
        <main className={classes.main}>
            { children && showChildren = true }
        </main>
    )
}