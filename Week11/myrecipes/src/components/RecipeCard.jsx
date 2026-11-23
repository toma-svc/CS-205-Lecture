import { useState } from "react";

export default function RecipeCard({ recipe, onAddIngredient }) {
    const [liked, setLiked] = useState(false);

    return (
        <>
            <h2>{recipe.name}</h2>
            <p>{recipe.cuisine}</p>
            <p>{recipe.time} minutes</p>
            <p>{recipe.difficulty}</p>
            <button onClick={() => setLiked(!liked)}>
                {liked ? "You Like This" : "Click to Like"}
            </button>
            <button onClick={() => onAddIngredient(recipe.mainIngredient)}>Add Main Ingredient</button>
        </>
    )
}