const recipes = [
    {
        id: 1,
        title: "Spaghetti Carbonara",
        image: "https://images.unsplash.com/photo-1574969903809-3f7a1668ceb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNwYWdoZXR0aSUyMENhcmJvbmFyYXxlbnwwfHwwfHx8MA%3D%3D",
        summary: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
        ingredients: [
            "200g spaghetti",
            "100g pancetta",
            "2 large eggs",
            "50g Pecorino cheese",
            "50g Parmesan",
            "Freshly ground black pepper",
            "Salt"
        ],
        instructions: [
            "Cook the spaghetti.",
            "Fry the pancetta.",
            "Beat the eggs and mix with cheese.",
            "Combine everything with spaghetti."
        ]
    },
    {
        id: 2,
        title: "Chicken Curry",
        image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMEN1cnJ5fGVufDB8fDB8fHww",
        summary: "A flavorful and spicy chicken curry made with a blend of aromatic spices.",
        ingredients: [
            "500g chicken",
            "2 onions",
            "3 tomatoes",
            "2 tsp ginger-garlic paste",
            "2 tsp curry powder",
            "1 tsp turmeric",
            "1 tsp cumin",
            "Salt",
            "Oil"
        ],
        instructions: [
            "Marinate the chicken with spices.",
            "Fry the onions and ginger-garlic paste.",
            "Add tomatoes and cook until soft.",
            "Add chicken and cook until done."
        ]
    },
    // Add 18 more recipes here in the same format
    {
        id: 3,
        title: "Beef Stew",
        image: "https://images.unsplash.com/photo-1608500218861-01091cdc501e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVlZiUyMFN0ZXd8ZW58MHx8MHx8fDA%3D",
        summary: "A hearty and comforting beef stew with tender chunks of beef and vegetables.",
        ingredients: [
            "1kg beef",
            "3 carrots",
            "2 potatoes",
            "2 onions",
            "3 cups beef broth",
            "2 tsp thyme",
            "Salt and pepper",
            "Olive oil"
        ],
        instructions: [
            "Brown the beef.",
            "Sauté the onions and carrots.",
            "Add the beef back with broth and thyme.",
            "Simmer until beef is tender."
        ]
    },
    {
        id: 4,
        title: "Vegetable Stir Fry",
        image: "https://images.unsplash.com/photo-1543826173-cfe2ca17577d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmVnZXRhYmxlJTIwU3RpciUyMEZyeXxlbnwwfHwwfHx8MA%3D%3D",
        summary: "A quick and easy vegetable stir fry with a savory soy sauce.",
        ingredients: [
            "1 broccoli",
            "2 carrots",
            "1 bell pepper",
            "1 onion",
            "3 tbsp soy sauce",
            "2 tbsp olive oil",
            "2 cloves garlic",
            "Salt and pepper"
        ],
        instructions: [
            "Chop all vegetables.",
            "Heat oil and sauté garlic.",
            "Add vegetables and stir fry.",
            "Add soy sauce and cook until tender."
        ]
    },
    {
        id: 5,
        title: "Pancakes",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFuY2FrZXN8ZW58MHx8MHx8fDA%3D",
        summary: "Fluffy and delicious pancakes perfect for breakfast.",
        ingredients: [
            "1 cup flour",
            "1 cup milk",
            "1 egg",
            "2 tbsp sugar",
            "1 tsp baking powder",
            "Pinch of salt",
            "Butter for cooking"
        ],
        instructions: [
            "Mix dry ingredients.",
            "Whisk in milk and egg.",
            "Cook on a hot griddle with butter.",
            "Flip when bubbles form on the surface."
        ]
    },
    {
        id: 6,
        title: "Chocolate Chip Cookies",
        image: "https://images.unsplash.com/photo-1568051243858-533a607809a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hvY29sYXRlJTIwQ2hpcCUyMENvb2tpZXN8ZW58MHx8MHx8fDA%3D",
        summary: "Classic chocolate chip cookies with a crispy edge and chewy center.",
        ingredients: [
            "1 cup butter",
            "1 cup sugar",
            "1 cup brown sugar",
            "2 eggs",
            "2 tsp vanilla extract",
            "3 cups flour",
            "1 tsp baking soda",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Cream butter and sugars.",
            "Add eggs and vanilla.",
            "Mix in dry ingredients.",
            "Fold in chocolate chips and bake."
        ]
    },
    {
        id: 7,
        title: "Caesar Salad",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2Flc2FyJTIwU2FsYWR8ZW58MHx8MHx8fDA%3D",
        summary: "A classic Caesar salad with crunchy croutons and a creamy dressing.",
        ingredients: [
            "1 head romaine lettuce",
            "1 cup croutons",
            "1/2 cup grated Parmesan",
            "1/2 cup Caesar dressing",
            "Salt and pepper"
        ],
        instructions: [
            "Chop the lettuce.",
            "Toss with dressing, croutons, and Parmesan.",
            "Season with salt and pepper."
        ]
    },
    {
        id: 8,
        title: "French Toast",
        image: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RnJlbmNoJTIwVG9hc3R8ZW58MHx8MHx8fDA%3D",
        summary: "Delicious French toast with a hint of cinnamon and vanilla.",
        ingredients: [
            "4 slices bread",
            "2 eggs",
            "1/2 cup milk",
            "1 tsp cinnamon",
            "1 tsp vanilla extract",
            "Butter for cooking"
        ],
        instructions: [
            "Whisk eggs, milk, cinnamon, and vanilla.",
            "Dip bread slices in the mixture.",
            "Cook on a hot griddle with butter until golden."
        ]
    },
    {
        id: 9,
        title: "Tomato Soup",
        image: "https://images.unsplash.com/photo-1626200949817-4719bd60000b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VG9tYXRvJTIwU291cHxlbnwwfHwwfHx8MA%3D%3D",
        summary: "A warm and comforting tomato soup perfect for any meal.",
        ingredients: [
            "6 tomatoes",
            "1 onion",
            "2 cloves garlic",
            "2 cups vegetable broth",
            "Salt and pepper",
            "Olive oil"
        ],
        instructions: [
            "Sauté onions and garlic.",
            "Add chopped tomatoes and cook.",
            "Blend with vegetable broth.",
            "Season with salt and pepper."
        ]
    },
    {
        id: 10,
        title: "Grilled Cheese Sandwich",
        image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JpbGxlZCUyMENoZWVzZSUyMFNhbmR3aWNofGVufDB8fDB8fHww",
        summary: "A classic grilled cheese sandwich with melted cheddar cheese.",
        ingredients: [
            "4 slices bread",
            "4 slices cheddar cheese",
            "Butter for cooking"
        ],
        instructions: [
            "Butter the bread slices.",
            "Place cheese between two slices.",
            "Grill until golden and cheese is melted."
        ]
    },
    {
        id: 11,
        title: "Tacos",
        image: "https://images.unsplash.com/photo-1611250188496-e966043a0629?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFRhY29zfGVufDB8fDB8fHww",
        summary: "Tasty and customizable tacos with your choice of fillings.",
        ingredients: [
            "8 taco shells",
            "500g ground beef",
            "1 onion",
            "1 packet taco seasoning",
            "Lettuce, tomatoes, cheese, salsa"
        ],
        instructions: [
            "Cook the ground beef with onions and seasoning.",
            "Fill taco shells with beef and toppings."
        ]
    },
    {
        id: 12,
        title: "Banana Bread",
        image: "https://images.unsplash.com/photo-1596241913027-34358037e159?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmFuYW5hJTIwQnJlYWR8ZW58MHx8MHx8fDA%3D",
        summary: "Moist and delicious banana bread perfect for a snack.",
        ingredients: [
            "3 ripe bananas",
            "1/2 cup butter",
            "1 cup sugar",
            "2 eggs",
            "1 tsp vanilla extract",
            "1 1/2 cups flour",
            "1 tsp baking soda",
            "Pinch of salt"
        ],
        instructions: [
            "Mash bananas and mix with butter.",
            "Add sugar, eggs, and vanilla.",
            "Mix in dry ingredients.",
            "Bake until a toothpick comes out clean."
        ]
    },
    {
        id: 13,
        title: "Lasagna",
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGFzYWduYXxlbnwwfHwwfHx8MA%3D%3D",
        summary: "Hearty and cheesy lasagna with layers of pasta, meat, and cheese.",
        ingredients: [
            "500g ground beef",
            "1 onion",
            "2 cloves garlic",
            "2 cups marinara sauce",
            "12 lasagna noodles",
            "2 cups ricotta cheese",
            "2 cups mozzarella cheese",
            "1/2 cup grated Parmesan"
        ],
        instructions: [
            "Cook the beef with onions and garlic.",
            "Add marinara sauce and simmer.",
            "Layer noodles, sauce, and cheeses.",
            "Bake until bubbly and golden."
        ]
    },
    {
        id: 14,
        title: "Mango Smoothie",
        image: "https://images.unsplash.com/photo-1619898804188-e7bad4bd2127?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFuZ28lMjBTbW9vdGhpZXxlbnwwfHwwfHx8MA%3D%3D",
        summary: "A refreshing mango smoothie perfect for a hot day.",
        ingredients: [
            "2 ripe mangoes",
            "1 cup yogurt",
            "1/2 cup milk",
            "1 tbsp honey"
        ],
        instructions: [
            "Blend all ingredients until smooth.",
            "Serve chilled."
        ]
    },
    {
        id: 15,
        title: "Pizza Margherita",
        image: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGl6emElMjBNYXJnaGVyaXRhfGVufDB8fDB8fHww",
        summary: "A classic pizza with fresh tomatoes, mozzarella, and basil.",
        ingredients: [
            "1 pizza dough",
            "2 cups tomato sauce",
            "200g mozzarella",
            "Fresh basil leaves",
            "Olive oil",
            "Salt and pepper"
        ],
        instructions: [
            "Spread sauce on dough.",
            "Add mozzarella and basil.",
            "Bake until crust is golden."
        ]
    },
    {
        id: 16,
        title: "Omelette",
        image: "https://images.unsplash.com/photo-1646579933415-92109f9805df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fE9tZWxldHRlfGVufDB8fDB8fHww",
        summary: "A fluffy omelette with your choice of fillings.",
        ingredients: [
            "3 eggs",
            "Salt and pepper",
            "Butter for cooking",
            "Fillings: cheese, ham, mushrooms, bell peppers, etc."
        ],
        instructions: [
            "Whisk eggs with salt and pepper.",
            "Cook in butter and add fillings.",
            "Fold and serve."
        ]
    },
    {
        id: 17,
        title: "BBQ Ribs",
        image: "https://images.unsplash.com/photo-1593030668930-8130abedd2b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QkJRJTIwUmlic3xlbnwwfHwwfHx8MA%3D%3D",
        summary: "Tender and flavorful BBQ ribs slow-cooked to perfection.",
        ingredients: [
            "1 rack of ribs",
            "1 cup BBQ sauce",
            "Salt and pepper",
            "Garlic powder",
            "Onion powder"
        ],
        instructions: [
            "Season ribs with spices.",
            "Slow cook until tender.",
            "Brush with BBQ sauce and grill."
        ]
    },
    {
        id: 18,
        title: "Greek Salad",
        image: "https://images.unsplash.com/photo-1606735584785-1848fdcaea57?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JlZWslMjBTYWxhZHxlbnwwfHwwfHx8MA%3D%3D",
        summary: "A fresh and healthy Greek salad with feta cheese and olives.",
        ingredients: [
            "1 cucumber",
            "2 tomatoes",
            "1 red onion",
            "1/2 cup olives",
            "1/2 cup feta cheese",
            "Olive oil",
            "Lemon juice",
            "Salt and pepper"
        ],
        instructions: [
            "Chop vegetables.",
            "Toss with olive oil, lemon juice, salt, and pepper.",
            "Top with feta cheese and olives."
        ]
    },
    {
        id: 19,
        title: "Spaghetti Bolognese",
        image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3BhZ2hldHRpJTIwQm9sb2duZXNlfGVufDB8fDB8fHww",
        summary: "A rich and meaty spaghetti bolognese sauce served over pasta.",
        ingredients: [
            "500g ground beef",
            "1 onion",
            "2 cloves garlic",
            "1 carrot",
            "2 cups tomato sauce",
            "Salt and pepper",
            "Olive oil",
            "Spaghetti"
        ],
        instructions: [
            "Cook the beef with onions, garlic, and carrot.",
            "Add tomato sauce and simmer.",
            "Serve over cooked spaghetti."
        ]
    },
    {
        id: 20,
        title: "Pumpkin Pie",
        image: "https://images.unsplash.com/photo-1509461399763-ae67a981b254?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHVtcGtpbiUyMFBpZXxlbnwwfHwwfHx8MA%3D%3D",
        summary: "A classic pumpkin pie with a spiced pumpkin filling.",
        ingredients: [
            "1 pie crust",
            "2 cups pumpkin puree",
            "1 cup sugar",
            "2 eggs",
            "1 tsp cinnamon",
            "1/2 tsp nutmeg",
            "1/2 tsp ginger",
            "1/2 tsp cloves",
            "1 cup evaporated milk"
        ],
        instructions: [
            "Mix all filling ingredients.",
            "Pour into pie crust.",
            "Bake until set."
        ]
    }
];


function getRecipeById(id) {
    return recipes.find(recipe => recipe.id === parseInt(id));
}
