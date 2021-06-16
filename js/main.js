/*Affichage des recettes*/
var recipeElement = document.getElementById('recipes-list');
for(let recipe of recipes){
  recipeElement.innerHTML += recipe.show();
}


/*Affichage du combobox Ingredients*/
var ingredientsDropdown = document.getElementById('ingredients-list');
var ingredientsArray = [];
for(let recipe of recipes){
    for(let ingredient of recipe.ingredients){
      let ingredientValue = Object.values(ingredient);
      var insertIngredients = ingredientsArray.push(ingredientValue[0]);
      var ingredientsArrayCleaned = [...new Set(ingredientsArray)];
    }
}
for(let i=0; i<ingredientsArrayCleaned.length; i++){
  ingredientsDropdown.innerHTML += `<p class="ingredient-item" value="${ingredientsArrayCleaned[i]}" alt="${ingredientsArrayCleaned[i]}">${ingredientsArrayCleaned[i]}</p>`;
}

var inputIngredients = document.getElementsByClassName('inputingredients');
inputIngredients.addEventListener('keyup', function(){

})

/*Affichage du combobox Appareils*/
var applianceDropdown = document.getElementById('appliances-list');
var appliancesArray = [];
for(let recipe of recipes){
    let appliance = recipe.appliance;
    var insertAppliances = appliancesArray.push(appliance);
    var appliancesArrayCleaned = [...new Set(appliancesArray)];
}
for(let i=0; i<appliancesArrayCleaned.length; i++){
  applianceDropdown.innerHTML += `<p class="appliance-item" value="${appliancesArrayCleaned[i]}" alt="${appliancesArrayCleaned[i]}">${appliancesArrayCleaned[i]}</p>`
}


/*Affichage du combobox Ustensiles*/
var ustensilsDropdown = document.getElementById('ustensils-list');
var ustensilsArray = [];
for(let recipe of recipes){
    for(let ustensils of recipe.ustensils){
      var insertUstensils = ustensilsArray.push(ustensils);
      var ustensilsArrayCleaned = [...new Set(ustensilsArray)];
    }
}
for(let i=0; i<ustensilsArrayCleaned.length; i++){
  ustensilsDropdown.innerHTML += `<p class="ustensil-item" value="${ustensilsArrayCleaned[i]}" alt="${ustensilsArrayCleaned[i]}">${ustensilsArrayCleaned[i]}</p>`
}

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