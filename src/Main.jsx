import { useState } from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"

export default function Main() {

    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"])
    const [recipeShown, setRecipeShown] = useState(false)

    function addIngredient(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")  // name from form > input //
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        //alert(`You added '${newIngredient}' in the list`);
        event.currentTarget.reset()
    }

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button > Add ingredient</button>
            </form>

            { ingredients.length > 0 &&  <IngredientsList ingredients={ingredients} toggleRecipeShown={toggleRecipeShown}/> }

            { recipeShown && <ClaudeRecipe/> }

        </main>
    )  
}