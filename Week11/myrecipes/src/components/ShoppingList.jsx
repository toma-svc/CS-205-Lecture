
export default function ShoppingList({ list, onRemoveIngredient }) {

    return (
        <section>
            <h3>Shopping List</h3>
            {
                list.length === 0 ? (
                    <p>Your shopping list is empty.</p>
                ) : (
                    <ul>
                        {list.map((item, index) => (
                            <li key={index}>{item} <button onClick={() => onRemoveIngredient(index)}>Remove Item</button></li>
                        ))}
                    </ul>
                )
            }

        </section>
    )
}