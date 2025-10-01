const API_KEY = "276e7deb12314c78a880975614c54888";

async function getRecipeDetails() {
  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id");
  const detailsDiv = document.getElementById("recipe-details");

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`
    );
    const recipe = await response.json();

    detailsDiv.innerHTML = `
      <h2>${recipe.title}</h2>
      <img src="${recipe.image}" alt="${
      recipe.title
    }" style="max-width:400px; border-radius:10px; margin:20px 0;">
      
      <h3>Ingredients</h3>
      <ul>
        ${recipe.extendedIngredients
          .map((ing) => `<li>${ing.original}</li>`)
          .join("")}
      </ul>

      <h3>Instructions</h3>
      <p>${recipe.instructions || "No instructions available."}</p>
    `;
  } catch (error) {
    console.error(error);
    detailsDiv.innerHTML = "<p>Error loading recipe details.</p>";
  }
}

getRecipeDetails();
