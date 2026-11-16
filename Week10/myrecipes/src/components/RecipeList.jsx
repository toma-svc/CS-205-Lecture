import RecipeCard from "./RecipeCard";

export default function RecipeList({recipes}){
    return (
        <section>
            {recipes.map((recipe) => (
                <RecipeCard
                key={recipe.id}
                recipe={recipe} />
            ))}
        </section>
    )
}