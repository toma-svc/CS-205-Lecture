import Header from "./components/Header";
import recipes from "./data/recipes";
import RecipeList from "./components/RecipeList";

function App() {
  const title = "My Groovy Recipe Box";
  const recipeCount = 10;

  return (
    <main>
      <Header title={title} />
      <p>We currently have {recipes.length} recipe{recipes.length == 1 ? '' : 's'}.</p>
      {/* conditional rendering only display the list if there are more than 4 recipes*/}
      {recipes.length > 4 && <RecipeList recipes={recipes} />}

      {recipes.some(item => item.difficulty == "Hard") && <RecipeList recipes={recipes} />}

    </main>
  )
}

export default App;