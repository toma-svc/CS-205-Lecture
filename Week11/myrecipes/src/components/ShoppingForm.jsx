import { useState } from "react"

export default function ShoppingForm({onAddItem}) {
    const [itemToAdd, setItemToAdd] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if(itemToAdd.trim() === ""){
            return;
        }
        onAddItem(itemToAdd.trim())
        setItemToAdd("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Item to add: </label>
            <input type="text" value={itemToAdd}
                onChange={(event) => setItemToAdd(event.target.value)} />
            <button type="submit">Add to List</button>
        </form>
    )
}