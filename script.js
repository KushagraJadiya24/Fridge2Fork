const API_KEY = "276e7deb12314c78a880975614c54888";

async function getRecipes() {
  const ingredients = document.getElementById("ingredients").value;
  const resultsDiv = document.getElementById("results");
  const loader = document.getElementById("loader");

  resultsDiv.innerHTML = "";
  loader.classList.remove("hidden");

  if (!ingredients) {
    resultsDiv.innerHTML = "<p>Please enter some ingredients!</p>";
    loader.classList.add("hidden");
    return;
  }

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=9&apiKey=${API_KEY}`
    );
    const data = await response.json();

    loader.classList.add("hidden");

    if (data.length === 0) {
      resultsDiv.innerHTML =
        "<p>No recipes found. Try different ingredients!</p>";
      return;
    }

    data.forEach((recipe) => {
      const card = document.createElement("div");
      card.classList.add("recipe-card");
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h3>${recipe.title}</h3>
        <a href="recipe.html?id=${recipe.id}">View Recipe</a>
      `;
      resultsDiv.appendChild(card);
    });
  } catch (error) {
    console.error(error);
    loader.classList.add("hidden");
    resultsDiv.innerHTML = "<p>Error fetching recipes. Please try again.</p>";
  }
}
