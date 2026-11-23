import RecipeCard from "./RecipeCard";

export default function RecipeList({recipes, onAddIngredient}){
    return (
        <section>
            {recipes.map((recipe) => (
                <RecipeCard
                key={recipe.id}
                recipe={recipe} 
                onAddIngredient={onAddIngredient}/>
            ))}
        </section>
    )
}