/*Affichage des recettes*/
var recipeElement = document.getElementById('recipes-list');

for(let recipe of recipes){
  recipeElement.innerHTML += recipe.show();
}


/*Affichage du dropdown Ingredients*/
var ingredientsDropdown = document.getElementsByClassName('ingredients-list');

for(let ingredient of ingredients){
  ingredientsDropdown.innerHTML += ingredient.show();
}