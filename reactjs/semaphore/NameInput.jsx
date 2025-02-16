export const NameInput = ({ color, setColor}) => {
    return (
        <input

          type="text"
          value={color}
          onInput={(e) => setColor(e.target.value) }
        />
    )
}