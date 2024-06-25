document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('recipe-detail.html')) {
        displayRecipeDetail();
    } else if (window.location.pathname.endsWith('recipe-list.html')) {
        displayRecipeList();
    } else {
        displayRecipes();
    }
});

function displayRecipes() {
    const recipesContainer = document.getElementById('recipesContainer');

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
        recipesContainer.appendChild(recipeElement);
    });
}

function displayRecipeDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = urlParams.get('id');
    const recipe = getRecipeById(recipeId);

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

    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        if (validateForm(name, comment)) {
            addComment(name, comment);
            commentForm.reset();
        }
    });

    function validateForm(name, comment) {
        const nameRegex = /^[a-zA-Z ]{2,30}$/;
        const commentRegex = /^.{1,300}$/;

        if (!nameRegex.test(name)) {
            alert('Please enter a valid name (2-30 characters).');
            return false;
        }

        if (!commentRegex.test(comment)) {
            alert('Please enter a valid comment (1-300 characters).');
            return false;
        }

        return true;
    }

    function addComment(name, comment) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;
        commentsList.appendChild(commentElement);
    }
}

function displayRecipeList() {
    const recipeTableBody = document.querySelector('#recipeTable tbody');

    recipes.forEach(recipe => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${recipe.title}</td>
            <td>${recipe.summary}</td>
            <td><a href="recipe-detail.html?id=${recipe.id}">View Recipe details</a></td>
        `;
        recipeTableBody.appendChild(row);
    });

}
