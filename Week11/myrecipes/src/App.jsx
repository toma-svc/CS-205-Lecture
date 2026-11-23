import Header from "./components/Header";
import recipes from "./data/recipes";
import RecipeList from "./components/RecipeList";
import { useState } from "react";
import ShoppingList from "./components/ShoppingList";
import styles from "./App.module.css";
import ShoppingForm from "./components/ShoppingForm";

function App() {
  const title = "My Groovy Recipe Box";
  const recipeCount = 10;
  const [shoppingList, setShoppingList] = useState([]);
  const [difficulty, setDifficulty] = useState("All");
  const filteredRecipes = 
    difficulty === "All" ?
    recipes :
    recipes.filter(recipe => recipe.difficulty === difficulty);

  function handleAddIngredient(ingredient) {
    setShoppingList([...shoppingList, ingredient]);
  }

  function removeIngredient(indexToRemove){
    const updatedArray = shoppingList.filter((_,index) => index !== indexToRemove);
    setShoppingList(updatedArray);
  }

  return (
    <main>
      <Header title={title} />
      <select value={difficulty}
        onChange={(event) => 
          setDifficulty(event.target.value)
        }>
        <option value="All">All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <p>We currently have {recipes.length} recipe{recipes.length == 1 ? '' : 's'}.</p>
      <section className={styles.columnContainer}>
        {/* conditional rendering only display the list if there are more than 4 recipes*/}
        {recipes.length > 4 && <RecipeList recipes={filteredRecipes} onAddIngredient={handleAddIngredient} />}
        <ShoppingList list={shoppingList} onRemoveIngredient={removeIngredient} />
        {/* {recipes.some(item => item.difficulty == "Hard") && <RecipeList recipes={recipes} />} */}
        <ShoppingForm onAddItem={handleAddIngredient}/>
      </section>
    </main>
  )
}

export default App;