import classes from './page.module.css'
import { Navigation } from './navigation'
import { useState } from 'react'
import { ValueInput } from '../Components/input'


export const Page4 = () => {
    const [value, setValue] = useState("");
    return (
        <>
        <ValueInput value={value} setValue={setValue} />
        <ValueInput value={value} setValue={setValue} />
        </>
    )

}