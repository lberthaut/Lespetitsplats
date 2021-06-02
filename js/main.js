var recipeElement = document.getElementById('recipes-list');

for(let recipe of recipes){
  recipeElement.innerHTML += recipe.show();
}