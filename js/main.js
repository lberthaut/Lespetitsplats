/*Affichage des recettes*/
var recipeElement = document.getElementById('recipes-list');
for(let recipe of recipes){
  recipeElement.innerHTML += recipe.show();
}

showIngredients();
showAppliances()
showUstensils()



var inputIngredients = document.querySelectorAll('.combobox');
inputIngredients.oninput = showIngredients(itemsSearchTool());



/* Affichage des tuiles d'ingredients recherchés */
/* var tileriesZone = document.querySelector(".tileries-search");
for(let i=0; i<ingredientsArrayCleaned; i++){
  ingredientsArrayCleaned[i] = this.ingredientsArrayCleaned;
  ingredientsArrayCleaned[i].addEventListener('click', function(){
    tileriesZone.innerHTML += `<div class="tile-search">
    <p>${ingredientsArrayCleaned[i]}</p>
    <i class="far fa-times-circle"></i></div>`;
  })
} */