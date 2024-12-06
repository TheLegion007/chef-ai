import { useState } from "react"

export default function Main() {
    
    //const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"])

    const ingredientsListItems = ingredients.map((ingredient) => {
        return <li key={ingredient}>{ingredient}</li>
    })

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")  // name from form > input //
        ingredients.push(newIngredient);
        setIngredients(prevIngredients => [...prevIngredients], newIngredient)
        console.log("value : " + ingredients);
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button> Add ingredient</button> 
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}