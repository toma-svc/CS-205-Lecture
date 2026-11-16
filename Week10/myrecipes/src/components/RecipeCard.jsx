export default function RecipeCard({recipe}) {
    return (
        <>
        <h2>{recipe.name}</h2>
        <p>{recipe.cuisine}</p>
        <p>{recipe.time} minutes</p>
        <p>{recipe.difficulty}</p>
        </>
    )
}