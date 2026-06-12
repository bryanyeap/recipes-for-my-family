## Task
Insert a new recipe either in the database, if it exists, or in recipes: Recipe[] array in the codebase. If no recipe was given, prompt the user to provide the slug, name, description, ingredients, and instructions for the new recipe.

## Preferences
- Prompt the user if there already exists a recipe with the same slug and have them decide to overwrite, create a new recipe with a different slug, or cancel the operation. 
- Use grams and milliliters for ingredient measurements.
- Auto generate description, emoji, and image for the recipe if not provided by the user.
- Generate a recipe if the user provides a recipe name but no other details, using the name as a basis for the generated content.


## Testing
To test the new recipe insertion, start the server and curl the new slug endpoint to verify that the recipe is correctly stored and retrievable.

## Review the work
**Invoke the ui-ux-reviewer** to review the user interface and user experience of the recipe insertion process.