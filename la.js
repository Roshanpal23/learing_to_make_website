// Redirection code for front page button
document.getElementById('open-button')?.addEventListener('click', function() {
    window.location.href = "la.html"; // Ensure the path is correct
});

// Array to hold recipes
const recipes = [
    {
        name: "Avocado Toast",
        ingredients: "1 ripe avocado, 2 slices of whole grain bread, Salt, Pepper, Red chili flakes",
        instructions: "1. Toast the bread slices until golden brown.\n2. Mash the avocado and spread it evenly on the toast.\n3. Sprinkle salt, pepper, and red chili flakes to taste.",
        image: "https://whatsgabycooking.com/wp-content/uploads/WGC-Avocado-Toast-copy-2.jpg"
    },
    {
        name: "Greek Salad",
        ingredients: "1 cucumber, 2 tomatoes, 1 red onion, 1/2 cup Kalamata olives, 1/2 cup feta cheese, Olive oil, Oregano, Salt",
        instructions: "1. Chop the cucumber, tomatoes, and red onion into bite-sized pieces.\n2. Add olives and crumbled feta cheese.\n3. Drizzle with olive oil, sprinkle oregano, and add salt to taste. Mix well.",
        image: "https://www.cookingclassy.com/wp-content/uploads/2018/02/greek-salad-4-500x500.jpg"
    }
];

// Add click event listeners to all recipe cards
document.querySelectorAll('.recipe-card').forEach((card, index) => {
    card.addEventListener('click', function() {
        showRecipeDetail(index);
    });
});

function showRecipeDetail(index) {
    const recipe = recipes[index];
    const recipeDetail = document.getElementById('recipe-detail');
    recipeDetail.innerHTML = `
        <h3>${recipe.name}</h3>
        <img src="${recipe.image}" alt="${recipe.name}">
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        <button id="back-button">Back</button>
    `;
    recipeDetail.style.display = 'block';
    document.getElementById('recipe-list').style.display = 'none';
    document.getElementById('add-recipe').style.display = 'none'; // Hide the form

    document.getElementById('back-button').addEventListener('click', function() {
        recipeDetail.style.display = 'none';
        document.getElementById('recipe-list').style.display = 'flex'; // Show the recipe list
        document.getElementById('add-recipe').style.display = 'block'; // Show the form
    });
}

// Handle adding new recipes
document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newRecipe = {
        name: document.getElementById('recipe-name').value,
        ingredients: document.getElementById('recipe-ingredients').value,
        instructions: document.getElementById('recipe-instructions').value,
        image: document.getElementById('recipe-image').value
    };
    recipes.push(newRecipe);

    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    recipeCard.innerHTML = `
        <h3>${newRecipe.name}</h3>
        <img src="${newRecipe.image || 'https://via.placeholder.com/150'}" alt="${newRecipe.name}">
    `;
    recipeCard.addEventListener('click', () => showRecipeDetail(recipes.length - 1));
    document.getElementById('recipe-list').appendChild(recipeCard);
    document.getElementById('recipe-form').reset();
});
