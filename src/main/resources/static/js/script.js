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
    const recipesContainer = document.getElementById('recipesContainer');

    // Loop through each recipe and create HTML elements to display them
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('article');
        recipeElement.innerHTML = `
            <div>
                <h3>${recipe.title}</h3>
                <img src="${recipe.image}" alt="${recipe.title}">
                <p>${recipe.summary}</p>
            </div>
            <a href="recipe-detail.html?id=${recipe.id}">View Recipe</a>
        `;
        // Append each recipe element to the recipes container
        recipesContainer.appendChild(recipeElement);
    });
}

// Function to display detailed information about a specific recipe
function displayRecipeDetail() {
    // Get query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    // Get the 'id' parameter from the URL
    const recipeId = urlParams.get('id');
    // Call function to get the recipe details based on the 'id'
    const recipe = getRecipeById(recipeId);

    // Get the container element for recipe details
    const recipeDetailContainer = document.getElementById('recipeDetail');
    recipeDetailContainer.innerHTML = `
        <section class="recipe-details-section">
            <div>
                <h2>${recipe.title}</h2>
                <img src="${recipe.image}" alt="${recipe.title}">
            </div>
            <div class="ingredients-instructions">
                <div class="ingredients">
                    <h3>Ingredients</h3>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>
                <div class="instructions">
                    <h3>Instructions</h3>
                    <ol>
                        ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                    </ol>
                </div>
            </div>
        </section>
        <section class="comments-section">
            <h3>Leave a Comment 👇</h3>
            <form id="commentForm">
                <label for="name"></label>
                <input type="text" id="name" name="name" placeholder="your name" required>
                <label for="comment"></label>
                <textarea id="comment" name="comment" rows="6" placeholder="your comment..." required></textarea>
                <button type="submit">Submit</button>
            </form>
            <div id="commentsSection">
                <h4>Comments</h4>
                <div id="commentsList"></div>
            </div>
        </section>
    `;

    // Get the comment form element
    const commentForm = document.getElementById('commentForm');
    // Get the container for comments
    const commentsList = document.getElementById('commentsList');

    // Handle form submission to add a new comment
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Get the values entered in the form fields
        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        // Validate the form inputs
        if (validateForm(name, comment)) {
            // Call function to add the comment to the list
            addComment(name, comment);
            // Reset the form fields after submission
            commentForm.reset();
        }
    });

    // Function to validate the form inputs
    function validateForm(name, comment) {
        // Regular expression for name validation
        const nameRegex = /^[a-zA-Z ]{2,30}$/;
        // Regular expression for comment validation
        const commentRegex = /^.{1,300}$/;

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
        // Create a <div> element for the comment
        const commentElement = document.createElement('div');
        // Add 'comment' class to the comment element
        commentElement.classList.add('comment');
        // Set inner HTML for the comment element
        commentElement.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;
        // Append the comment element to the comments list
        commentsList.appendChild(commentElement);
    }
}

// Function to display a table list of recipes
function displayRecipeList() {
    // Get the <tbody> element of the recipe table
    const recipeTableBody = document.querySelector('#recipeTable tbody');

    // Loop through each recipe and create table rows to display them
    recipes.forEach(recipe => {
        // Create a <tr> element for each recipe
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${recipe.title}</td>
            <td>${recipe.summary}</td>
            <!-- Link to view recipe details -->
            <td><a href="recipe-detail.html?id=${recipe.id}">View Recipe details</a></td> 
        `;
        recipeTableBody.appendChild(row); // Append each row to the recipe table body
    });
}
