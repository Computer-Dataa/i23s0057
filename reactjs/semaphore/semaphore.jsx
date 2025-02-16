import { useState } from "react";
import { NameInput } from "./nameinput";

export const Semaphore = () => {
    const [color, setColor] = useState("")

    return (
        <>
        <NameInput color={color} setColor={setColor}/>
        </>
    )
}