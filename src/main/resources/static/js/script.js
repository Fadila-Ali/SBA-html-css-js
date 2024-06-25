// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check the current page URL to determine which function to call
    if (window.location.pathname.endsWith('recipe-detail.html')) {
        displayRecipeDetail(); // Call function to display recipe details
    } else if (window.location.pathname.endsWith('recipe-list.html')) {
        displayRecipeList(); // Call function to display recipe list
    } else {
        displayRecipes(); // Default to displaying a list of recipes
    }
});

// Function to display a list of recipes
function displayRecipes() {
    const recipesContainer = document.getElementById('recipesContainer'); // Get the container element for recipes

    // Loop through each recipe and create HTML elements to display them
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('article'); // Create an <article> element for each recipe
        recipeElement.innerHTML = `
            <div>
                <h3>${recipe.title}</h3> <!-- Display recipe title -->
                <img src="${recipe.image}" alt="${recipe.title}"> <!-- Display recipe image -->
                <p>${recipe.summary}</p> <!-- Display recipe summary -->
            </div>
            <a href="recipe-detail.html?id=${recipe.id}">View Recipe</a> <!-- Link to view recipe details -->
        `;
        recipesContainer.appendChild(recipeElement); // Append each recipe element to the recipes container
    });
}

// Function to display detailed information about a specific recipe
function displayRecipeDetail() {
    const urlParams = new URLSearchParams(window.location.search); // Get query parameters from the URL
    const recipeId = urlParams.get('id'); // Get the 'id' parameter from the URL
    const recipe = getRecipeById(recipeId); // Call a function to get the recipe details based on the 'id'

    const recipeDetailContainer = document.getElementById('recipeDetail'); // Get the container element for recipe details
    recipeDetailContainer.innerHTML = `
        <section class="recipe-details-section">
            <div>
                <h2>${recipe.title}</h2> <!-- Display recipe title -->
                <img src="${recipe.image}" alt="${recipe.title}"> <!-- Display recipe image -->
            </div>
            <div class="ingredients-instructions">
                <div class="ingredients">
                    <h3>Ingredients</h3>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')} <!-- Display ingredients as a list -->
                    </ul>
                </div>
                <div class="instructions">
                    <h3>Instructions</h3>
                    <ol>
                        ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')} <!-- Display instructions as a list -->
                    </ol>
                </div>
            </div>
        </section>
        <section class="comments-section">
            <h3>Leave a Comment 👇</h3>
            <form id="commentForm">
                <label for="name"></label>
                <input type="text" id="name" name="name" placeholder="your name" required> <!-- Input field for name -->
                <label for="comment"></label>
                <textarea id="comment" name="comment" rows="6" placeholder="your comment..." required></textarea> <!-- Textarea for comment -->
                <button type="submit">Submit</button> <!-- Submit button -->
            </form>
            <div id="commentsSection">
                <h4>Comments</h4>
                <div id="commentsList"></div> <!-- Container for displaying comments -->
            </div>
        </section>
    `;

    const commentForm = document.getElementById('commentForm'); // Get the comment form element
    const commentsList = document.getElementById('commentsList'); // Get the container for comments

    // Handle form submission to add a new comment
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Get the values entered in the form fields
        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        // Validate the form inputs
        if (validateForm(name, comment)) {
            addComment(name, comment); // Call function to add the comment to the list
            commentForm.reset(); // Reset the form fields after submission
        }
    });

    // Function to validate the form inputs
    function validateForm(name, comment) {
        const nameRegex = /^[a-zA-Z ]{2,30}$/; // Regular expression for name validation
        const commentRegex = /^.{1,300}$/; // Regular expression for comment validation

        // Check if name is valid
        if (!nameRegex.test(name)) {
            alert('Please enter a valid name (2-30 characters).'); // Show alert if name is invalid
            return false;
        }

        // Check if comment is valid
        if (!commentRegex.test(comment)) {
            alert('Please enter a valid comment (1-300 characters).'); // Show alert if comment is invalid
            return false;
        }

        return true; // Return true if form inputs are valid
    }

    // Function to add a new comment to the comments list
    function addComment(name, comment) {
        const commentElement = document.createElement('div'); // Create a <div> element for the comment
        commentElement.classList.add('comment'); // Add 'comment' class to the comment element
        commentElement.innerHTML = `<strong>${name}</strong><p>${comment}</p>`; // Set inner HTML for the comment element
        commentsList.appendChild(commentElement); // Append the comment element to the comments list
    }
}

// Function to display a table list of recipes
function displayRecipeList() {
    const recipeTableBody = document.querySelector('#recipeTable tbody'); // Get the <tbody> element of the recipe table

    // Loop through each recipe and create table rows to display them
    recipes.forEach(recipe => {
        const row = document.createElement('tr'); // Create a <tr> element for each recipe
        row.innerHTML = `
            <td>${recipe.title}</td> <!-- Display recipe title -->
            <td>${recipe.summary}</td> <!-- Display recipe summary -->
            <td><a href="recipe-detail.html?id=${recipe.id}">View Recipe details</a></td> <!-- Link to view recipe details -->
        `;
        recipeTableBody.appendChild(row); // Append each row to the recipe table body
    });
}
