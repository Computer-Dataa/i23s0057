export const ValueInput = ({value, setValue}) => {
    return(
        <input
            value={value}
            onInput={(e) => setValue(e.target.value)}
            type="text" 
        />
    )
}