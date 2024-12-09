import { useState } from "react"

export default function Main() {

    const ingredients_1 = ["Chicken", "Oregano", "Tomatoes","Olive Oil", "Spinach"]
    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"])

    const ingredientsListItems = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    })

    function addIngredient(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")  // name from form > input //
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        //alert(`You added '${newIngredient}' in the list`);
        event.currentTarget.reset()
    }

    function addIngredientNotWorking(formData) {
        console.log("formData : ", formData)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        console.log("newingredient: ", newIngredient);
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
                <button> Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <section>
                    <h2>Ingredients on Hand :</h2>
                    <ul className="ingredients-list" aria-live="polite">
                        {ingredientsListItems}
                    </ul>
                    {ingredients.length > 3 && <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button>Get a recipe</button>
                    </div>}
                </section>
            }

        </main>
    )
}